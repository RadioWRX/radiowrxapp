import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AlbumService } from '../shared/services/album.service';
import { Router, Params } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';


@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {

  albumItems: Array<any>;
  albumPic: string = '/assets/images/no-avatar.gif';

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      650: {
        items: 4
      },
      1000: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
    nav: false
  }

  constructor(
    private albumService: AlbumService,
    public router: Router,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getAlbumsData();
  }

  getAlbumsData() {
    this.albumService.getDummyAlbums()
    .subscribe(result => {
      this.albumItems = result;
      console.log("AlbumItems ", this.albumItems);
    })
  }

  viewAlbum(item, docId) {
    this.router.navigate(['/fan-view-album-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
  }

}
