import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-album-options',
  templateUrl: './album-options.component.html',
  styleUrls: ['./album-options.component.scss']
})
export class AlbumOptionsComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  // Allow registered user to create a playlist. If not registered then will need to create an account
  // and redirect to register page.
  createPlaylist() {
    alert("Are you sure you want to create a playlist?");
  }

  // Allow registered user to add to a playlist. If not registered then will need to create an account
  // and redirect to register page.
  addToPlaylist() {
    alert("Are you sure you want to add to a playlist?");
  }

  // Allow registered user to favourite an album. If not registered then will need to create an account
  // and redirect to register page.
  addToFavourites() {
    alert("Are you sure you want to add to favourites?");
  }

  // Allow registered user to delete album from playlist. If not registered then will need to create an account
  // and redirect to register page.
  removeFromPlaylist() {
    alert("Are you sure you want to remove from a playlist?");
  }

}
