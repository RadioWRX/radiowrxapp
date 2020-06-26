import { Injectable } from '@angular/core';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlaylistSongService {
  userId: string;
  docId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getPlaylistSong(playlistSongKey) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    //let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('playlist').doc(this.docId).collection('songs').doc(playlistSongKey).snapshotChanges();
  }

  updatePlaylistSong(playlistSongKey, value) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    //let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('playlist').doc(this.docId).collection('songs').doc(playlistSongKey).set(value);
  }

  deletePlaylistSong(playlistSongKey) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    return this.afs.collection('users').doc(this.userId).collection('playlist').doc(this.docId).collection('songs').doc(playlistSongKey).delete();
  }

  getPlaylistSongs() {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    console.log(this.docId);
    return this.afs.collection('users').doc(this.userId).collection('playlist').doc(this.docId).collection('songs').snapshotChanges();
  }

  createPlaylistSong(value) {
    this.userId = localStorage.getItem('user');
    this.docId = localStorage.getItem('docId');
    //let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;

    console.log("Create  Playlist song service 1");

    this.afs.collection('playlist').doc(this.docId).collection('songs').add({
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

    return this.afs.collection('users').doc(this.userId).collection('playlist').doc(this.docId).collection('songs').add({
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
}
