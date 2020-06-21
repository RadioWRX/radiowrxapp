import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { VideosService } from '../shared/services/videos.service';
import { Router, Params } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';


@Component({
  selector: 'app-view-all-videos',
  templateUrl: './view-all-videos.component.html',
  styleUrls: ['./view-all-videos.component.scss']
})
export class ViewAllVideosComponent implements OnInit {
  videoItems: Array<any>;

  // Custom options for the Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      650: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: true
  }

  constructor(
    private videosService: VideosService,
    public router: Router,
    private afStorage: AngularFireStorage
    ) { }

  ngOnInit() {
    this.getVideosData();
  }

  //FIX: Work out how all users albums can be displayed.
  getVideosData() {
    this.videosService.getDummyVideos()
    .subscribe(result => {
      this.videoItems = result;
      console.log("VideoItems ", this.videoItems);
    })
  }

}
