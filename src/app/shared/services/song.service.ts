import { Injectable } from '@angular/core';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  userId: string;
  docId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getSong(songKey) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    //let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(this.docId).collection('songs').doc(songKey).snapshotChanges();
  }

  getDummySong(dummySongKey) {
    //this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    return this.afs.collection('albums').doc(this.docId).collection('songs').doc(dummySongKey).snapshotChanges();
  }

  updateSong(songKey, value) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    //let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(this.docId).collection('songs').doc(songKey).set(value);
  }

  deleteSong(songKey) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(this.docId).collection('songs').doc(songKey).delete();
  }

  getSongs() {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    console.log(this.docId);
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(this.docId).collection('songs').snapshotChanges();
  }

  getDummySongs() {
    //this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    console.log(this.docId);
    return this.afs.collection('albums').doc(this.docId).collection('songs').snapshotChanges();
  }

  createSong(value) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    //let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;

    console.log("Create song service");

    return this.afs.collection('users').doc(this.userId).collection('albums').doc(this.docId).collection('songs').add({
      songId:value.songId,
      songTitle: value.songTitle,
      songNumber: value.songNumber,
      songWriters: value.songWriters,
      durationSeconds: value.durationSeconds,
      durationMinutes: value.durationMinutes,
      publisher: value.publisher,
      //bundleName: value.bundleName,
      labelName: value.labelName,
      productCatalogueNumber: value.productCatalogueNumber,
      discNumber: value.discNumber,
      grid: value.grid,
      isrcCode: value.isrcCode,
      iswcCode: value.iswcCode,
      //bundleId: value.bundleId,
      //productName: value.productName,
      description: value.description,
      songurl:value.songurl
    });
  }

  createDummySong(value) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');

    console.log("Create Dummy Song service");

    return this.afs.collection('albums').doc(this.docId).collection('songs').add({
      songId:value.songId,
      songTitle: value.songTitle,
      songNumber: value.songNumber,
      songWriters: value.songWriters,
      durationSeconds: value.durationSeconds,
      durationMinutes: value.durationMinutes,
      publisher: value.publisher,
      //bundleName: value.bundleName,
      labelName: value.labelName,
      productCatalogueNumber: value.productCatalogueNumber,
      discNumber: value.discNumber,
      grid: value.grid,
      isrcCode: value.isrcCode,
      iswcCode: value.iswcCode,
      //bundleId: value.bundleId,
      //productName: value.productName,
      description: value.description,
      songurl: value.songurl
    })
  }

  createRandomSong(value) {

    console.log("Create Random Song service");
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');

    return this.afs.collection('songs').add({
      songId:value.songId,
      songTitle: value.songTitle,
      songNumber: value.songNumber,
      songWriters: value.songWriters,
      durationSeconds: value.durationSeconds,
      durationMinutes: value.durationMinutes,
      publisher: value.publisher,
      //bundleName: value.bundleName,
      labelName: value.labelName,
      productCatalogueNumber: value.productCatalogueNumber,
      discNumber: value.discNumber,
      grid: value.grid,
      isrcCode: value.isrcCode,
      iswcCode: value.iswcCode,
      //bundleId: value.bundleId,
      //productName: value.productName,
      description: value.description,
      songurl: value.songurl
    })


  }
}
