import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  userId: string;
  docId: string;


  constructor(
    private afs: AngularFirestore
  ) { }

  getPlaylist(playlistKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('playlists').doc(playlistKey).snapshotChanges();
  }

  updatePlaylist(playlistKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('playlists').doc(playlistKey).set(value);
  }

  deletePlaylist(playlistKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('playlists').doc(playlistKey).delete();
  }

  getPlaylists() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('playlists').snapshotChanges();
  }

  createPlaylist(value) {
    // Create album and attach to User
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('playlists').add({
      playlistTitle: value.playlistTitle,
      description: value.description,
      albumId: value.albumId,
      albumImageUrl: ''
    })
    // This code creates a duplicate album collection to display to guests and fans.
  }
}
