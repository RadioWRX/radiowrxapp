import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getAlbum(albumKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(albumKey).snapshotChanges();
  }

  getAllAlbums() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').snapshotChanges();
  }

  updateAlbum(albumKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(albumKey).set(value);
  }

  deleteAlbum(albumKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(albumKey).delete();
  }

  getAlbums() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').snapshotChanges();
  }

  createAlbum(value) {
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
      description: value.description
    })
  }
}
