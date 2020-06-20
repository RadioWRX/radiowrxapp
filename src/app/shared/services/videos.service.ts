import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getVideo(videoKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('videos').doc(videoKey).snapshotChanges();
  }

  updateVideo(videoKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('videos').doc(videoKey).set(value);
  }

  deleteVideo(videoKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('videos').doc(videoKey).delete();
  }

  getVideos() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('videos').snapshotChanges();
  }

  getDummyVideos() {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('videos').snapshotChanges();
  }

  createVideo(value) {
    this.userId = localStorage.getItem('user');
    //This code creates a duplicate video item.
    this.afs.collection('videos').add({
      videoTitle: value.videoTitle,
      youTubeId: value.youTubeId,
      videoDescription: value.videoDescription,
      publishedDate: value.publishedDate
    })
    // This code creates a video in the database
    return this.afs.collection('users').doc(this.userId).collection('videos').add({
      videoTitle: value.videoTitle,
      youTubeId: value.youTubeId,
      videoDescription: value.videoDescription,
      publishedDate: value.publishedDate
    })
  }
}
