import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AlbumService } from '../shared/services/album.service';
import { Router, Params } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-view-all-albums',
  templateUrl: './view-all-albums.component.html',
  styleUrls: ['./view-all-albums.component.scss']
})
export class ViewAllAlbumsComponent implements OnInit {

  albumItems: Array<any>;
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
    this.getAlbumsData();
  }

  //FIX: Work out how all users albums can be displayed.
  getAlbumsData() {
    this.albumService.getDummyAlbums()
    .subscribe(result => {
      this.albumItems = result;
      console.log("AlbumItems ", this.albumItems);
    })
  }

  /*viewAlbum(item, docId) {
    this.router.navigate(['/fan-view-album-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
  }*/

}
