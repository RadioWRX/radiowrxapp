import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../shared/services/album.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

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
  albumPic: string = '/assets/images/no-avatar.gif';

  constructor(
    private albumService: AlbumService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.albumService.getAlbums()
    .subscribe(result => {
      this.items = result;
    })
  }

  dataState() {
    this.albumService.getAlbums().subscribe(data => {
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
