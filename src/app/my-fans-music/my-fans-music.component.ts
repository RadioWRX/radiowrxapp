import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../shared/services/playlist.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Music101Component } from '../modals/music101/music101.component';

@Component({
  selector: 'app-my-fans-music',
  templateUrl: './my-fans-music.component.html',
  styleUrls: ['./my-fans-music.component.scss']
})
export class MyFansMusicComponent implements OnInit {

  ref: AngularFireStorageReference;
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  playlistPic: string = '/assets/images/no-avatar.gif';
  modalRef: BsModalRef;

  constructor(
    private playlistService: PlaylistService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.playlistService.getPlaylists()
    .subscribe(result => {
      this.items = result;
    })
  }

  viewPlaylist(item, docId) {
    this.router.navigate(['/view-playlist-details/' + item.payload.doc.id]);
    //docId = item.payload.doc.id;
    //localStorage.setItem('docId', docId);
    //console.log(docId);
    //localStorage.setItem(docId);
  }

  editPlaylist(item, docId) {
    this.router.navigate(['/edit-playlist-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
  }

  // TODO: This functionality would be cleaner within a modal.
  // FIX: Deleting albums does not delete songs that are a
  // collection of albums. Need to find a way to clean that up.
  deletePlaylist(item) {
    if (window.confirm('Are you sure you want to delete this album?')) {
      this.playlistService.deletePlaylist(item.payload.doc.id);
    }
  }

  dataState() {
    this.playlistService.getPlaylists().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }
}
