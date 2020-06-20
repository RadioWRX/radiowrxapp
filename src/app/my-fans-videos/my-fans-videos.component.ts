import { Component, OnInit } from '@angular/core';
import { VideosService } from '../shared/services/videos.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Videos101Component } from '../modals/videos101/videos101.component';

@Component({
  selector: 'app-my-fans-videos',
  templateUrl: './my-fans-videos.component.html',
  styleUrls: ['./my-fans-videos.component.scss']
})
export class MyFansVideosComponent implements OnInit {

  // This ID needs to be safeguarded when being uploaded to prevent erroneous data.
  id: string;
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  modalRef: BsModalRef;

  constructor(
    private videosService: VideosService,
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
    this.videosService.getVideos()
    .subscribe(result => {
      this.items = result;
    })
  }

  dataState() {
    this.videosService.getVideos().subscribe(data => {
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

  openModal() {
    this.modalRef = this.modalService.show(Videos101Component, {
      initialState: {
        title: 'Videos Explained',
        data: { }
      }
    });
  }
}
