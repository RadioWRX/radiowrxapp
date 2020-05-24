import { Component, OnInit } from '@angular/core';
import { VideosService } from '../shared/services/videos.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-bands-videos',
  templateUrl: './my-bands-videos.component.html',
  styleUrls: ['./my-bands-videos.component.scss']
})
export class MyBandsVideosComponent implements OnInit {
  /* If you get SameSite error you will need to activate this function in Chrome.
  Open up a new tab and put chrome:flags in the URL. Search for SameSite and enable
  the relevant features. This allows for videos to be vuewed but I have no idea how
  to implement within the app or if its even necessary.
  */

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

  constructor(
    private videosService: VideosService,
    public router: Router,
    private afAuth: AuthService
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

  viewAlbum() {
    this.router.navigate(['view-video']);
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

  editVideo(item) {
    this.router.navigate(['/edit-video-details/' + item.payload.doc.id]);
  }

  // TODO: This functionality would be cleaner within a modal.
  deleteVideo(item) {
    if (window.confirm('Are you sure you want to delete this member?')) {
      this.videosService.deleteVideo(item.payload.doc.id);
    }
  }

  //YouTube Video controls
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
