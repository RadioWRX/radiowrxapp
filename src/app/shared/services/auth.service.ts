import { Injectable } from '@angular/core';
import { User } from '../services/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; //Save logged in user data
  profileData: any;
  docId: string;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    /*Save user data into localstorage when logged in and set to null
    when logged out */
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user.uid));
        JSON.parse(localStorage.getItem('user'));
        console.log("User is logged in!");        
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
        console.log("User is logged out!")
      }
    })
  }

  //Login regsitered user
  async login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.router.navigate(['profile']);
      this.setUserData(result.user);
    }).catch((error) => {
      alert(error.message);
    })
}

  // Register new user
  async register(email: string, password: string, profile, member, album, song) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.sendVerificationEmail();
      this.setUserData(result.user);
    }).catch((error) => {
      alert(error.message);
    })
  }

  // Send verification email
  sendVerificationEmail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email']);
  })
}

// Reset forgotten password
forgotPassword(passwordResetEmail) {
  return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    alert('Password reset and email sent. Please check your inbox.');
    this.router.navigate(['login']);
  }).catch((error) => {
    alert(error)
  })
}

//Set up user data for login and register feature
setUserData(user) {
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const userData: User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified
  }
  return userRef.set(userData, {
    merge: true
  })
}

  // Returns true when user is logged in and email is verified
  get isLoggedIn():boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  return (user !== null);
}

  // Log out user
  logOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['main-page']);
  })
}

}
