import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AlbumService } from '../shared/services/album.service';
import { VideosService } from '../shared/services/videos.service';
import { EventsService } from '../shared/services/events.service';
import { Router, Params } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  videoItems: Array<any>;
  eventItems: Array<any>;
  albumItems: Array<any>;
  albumPic: string = '/assets/images/no-avatar.gif';

  ref: AngularFireStorageReference;

  // Custom options for the Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 3
      },
      500: {
        items: 4
      },
      650: {
        items: 5
      },
      1000: {
        items: 6
      },
      1200: {
        items: 7
      }
    },
    nav: true
  }


  constructor(
    private albumService: AlbumService,
    private videosService: VideosService,
    private eventsService: EventsService,
    public router: Router,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getVideoData();
    this.getEventsData();
    this.getAlbumsData();
    this.getData();
  }

  //FIX: Work out how all users albums can be displayed.
  getAlbumsData() {
    this.albumService.getDummyAlbums()
    .subscribe(result => {
      this.albumItems = result;
      console.log("AlbumItems ", this.albumItems);
      //console.log("AlbumItems ", this.albumItems.payload.doc.id);
    })
    /*this.albumService.getAllAlbums()
    .subscribe(result => {
      this.items = result;
      console.log("Items are " + this.items);
    })*/
  }

  getData() {
    /*this.membersService.getMembers()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })*/
    //console.log("Get Data" + this.item.id);

    console.log("Get Data ", this.albumItems);
    //this.getPicUrl(this.albumItems);
  }



  //FIX: Work out how all users albums can be displayed.
  getEventsData() {
    this.eventsService.getDummyEvents()
    .subscribe(result => {
      this.eventItems = result;
      console.log("EventItems ", this.eventItems);
    })
    /*this.albumService.getAllAlbums()
    .subscribe(result => {
      this.items = result;
      console.log("Items are " + this.items);
    })*/
  }

  //FIX: Work out how all users albums can be displayed.
  getVideoData() {
    this.videosService.getDummyVideos()
    .subscribe(result => {
      this.videoItems = result;
      console.log("Video Items ",  this.videoItems);
    })
    /*this.albumService.getAllAlbums()
    .subscribe(result => {
      this.items = result;
      console.log("Items are " + this.items);
    })*/
  }

  viewAlbum(item, docId) {
    this.router.navigate(['/fan-view-album-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
    //console.log(docId);
    //localStorage.setItem(docId);
  }

  viewEvent(item, docId) {
    this.router.navigate(['/fan-view-event-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
    //console.log(docId);
    //localStorage.setItem(docId);
}

  goToAlbum() {
    this.router.navigate(['/fan-view-album/']);
    //alert("This image was clicked!");
  }

  goToEvent() {
    this.router.navigate(['/fan-view-event/']);
    //alert("This image was clicked!");
  }

}
