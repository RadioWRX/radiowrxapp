import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getMember(memberKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('members').doc(memberKey).snapshotChanges();
  }

  updateMember(memberKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('members').doc(memberKey).set(value);
  }

  deleteMember(memberKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('members').doc(memberKey).delete();
  }

  getMembers() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('members').snapshotChanges();
  }

  createMember(value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('members').add({
      memberName: value.memberName,
      memberBio: value.memberBio,
      memberInstrument: value.memberInstrument,
      memberDOB: value.memberDOB
      //memberImage: value.memberImage
    })
  }
}
