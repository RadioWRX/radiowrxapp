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
}
