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
