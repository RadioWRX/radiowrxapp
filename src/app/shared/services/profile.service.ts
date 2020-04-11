import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userId: string;

  constructor(
    private afs: AngularFirestore
    //public afAuth: AngularFireAuth,
    //public router: Router
  ) { }

  getAvatars(){
    return this.afs.collection('/avatar').valueChanges()
  }

  getProfile(profileKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('profiles').doc(profileKey).snapshotChanges();
  }

  updateProfile(profileKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('profiles').doc(profileKey).set(value);
  }

  deleteProfile(profileKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('profiles').doc(profileKey).delete();
  }

  getProfiles() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('profiles').snapshotChanges();
  }

  createProfile(value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('profiles').add({
      artistName: value.artistName,
      artistGenre: value.artistGenre,
      yearFormed: value.yearFormed,
      addressOne: value.addressOne,
      addressTwo: value.addressTwo,
      artistTown: value.artistTown,
      artistCountry: value.artistCountry,
      postCode: value.postCode,
      contactNumber: value.contactNumber
    })
  }
}
