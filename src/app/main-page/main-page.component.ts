import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AlbumService } from '../shared/services/album.service';
import { Router, Params } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items: Array<any>;
  albumPic: string = '/assets/images/no-avatar.gif';

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
    private albumService: AlbumService,
    public router: Router,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getData();
  }


  //FIX: Work out how all users albums can be displayed.
  getData() {
    this.albumService.getAllAlbums()
    .subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  viewAlbum(item, docId) {
    this.router.navigate(['/fan-view-album/']);
    //docId = item.payload.doc.id;
    //localStorage.setItem('docId', docId);
    //console.log(docId);
    //localStorage.setItem(docId);
  }

  viewEvent(item, docId) {
    this.router.navigate(['/fan-view-event/']);
    //docId = item.payload.doc.id;
    //localStorage.setItem('docId', docId);
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
