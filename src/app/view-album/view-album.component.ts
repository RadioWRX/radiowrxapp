import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlbumService } from '../shared/services/album.service';
import { SongService } from '../shared/services/song.service';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit {
  item: any;
  items: Array<any>;
  hideWhenNoAlbumData: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor(
    private router: Router,
    private albumService: AlbumService,
    private songService: SongService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.getSongData();
        this.dataState();
      }
    })
  }

  getSongData() {
    this.songService.getSongs()
    .subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  /*FIX: Problem with Album Data showing up in
  Soings page even though there are no songs.
  This is probably due to not unsubcribing from
  the service. Perhaps nNgDestroy will fix this
  when navigating away from the page?
  */
  dataState() {
    this.songService.getSongs().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoAlbumData = false;
        this.noData = true;
      } else {
        this.hideWhenNoAlbumData = true;
        this.noData = false;
      }
    })
  }

  playSong() {
    alert("Song is about to play!");
  }

  editSong(item) {
    this.router.navigate(['/edit-song-details/' + item.payload.doc.id]);
  }
}
