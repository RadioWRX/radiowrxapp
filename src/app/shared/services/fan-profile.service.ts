import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FanProfileService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getFanAvatars(){
    return this.afs.collection('/avatar').valueChanges()
  }

  getFanProfile(fanProfileKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('fan-profiles').doc(fanProfileKey).snapshotChanges();
  }

  updateFanProfile(fanProfileKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('fan-profiles').doc(fanProfileKey).set(value);
  }

  deleteFanProfile(fanProfileKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('fan-profiles').doc(fanProfileKey).delete();
  }

  getFanProfiles() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('fan-profiles').snapshotChanges();
  }

  createFanProfile(value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('fan-profiles').add({
      name: value.name,
      gender: value.gender,
      dob: value.dob,
      addressOne: value.addressOne,
      addressTwo: value.addressTwo,
      town: value.town,
      country: value.country,
      postCode: value.postCode,
      contactNumber: value.contactNumber
    })
  }
}
