import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  userId: string;
  docId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getAlbum(albumKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(albumKey).snapshotChanges();
  }

  getDummyAlbum(dummyAlbumKey) {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('albums').doc(dummyAlbumKey).snapshotChanges();
  }

  updateAlbum(albumKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(albumKey).set(value);
  }

  updateDummyAlbum(dummyAlbumKey, value) {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('albums').doc(dummyAlbumKey).set(value);
  }

  deleteAlbum(albumKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(albumKey).delete();
  }

  getAlbums() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').snapshotChanges();
  }

  getDummyAlbums() {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('albums').snapshotChanges();
  }

  createAlbum(value) {
    // Create album and attach to User
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').add({
      albumTitle: value.albumTitle,
      albumGenre: value.albumGenre,
      yearReleased: value.yearReleased,
      albumHours: value.albumHours,
      albumMinutes: value.albumMinutes,
      albumSeconds: value.albumSeconds,
      numberOfTracks: value.numberOfTracks,
      upcCode: value.upcCode,
      description: value.description,
      dummyAlbumId: value.dummyAlbumId,
      albumImageUrl: ''
    })
    // This code creates a duplicate album collection to display to guests and fans.
  }

  createDummyAlbum(value) {
    this.userId = localStorage.getItem('user');
    // This code creates a duplicate database with no UserId.
    this.afs.collection('albums').add({
      albumTitle: value.albumTitle,
      albumGenre: value.albumGenre,
      yearReleased: value.yearReleased,
      albumHours: value.albumHours,
      albumMinutes: value.albumMinutes,
      albumSeconds: value.albumSeconds,
      numberOfTracks: value.numberOfTracks,
      upcCode: value.upcCode,
      description: value.description,
      dummyAlbumId: value.dummyAlbumId,
      albumImageUrl: '',
    })
  }
}
