import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlbumService } from '../shared/services/album.service';
import { SongService } from '../shared/services/song.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  albumPic: string = '/assets/images/no-avatar.gif';

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
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage
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
      this.getData();
    })
  }

  getData() {
    /*this.membersService.getMembers()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })*/
    console.log("Get Data" + this.item.id);
    this.getPicUrl(this.item.id);
  }

  upload(event, docid) {
    const id = "albumPic_"+ docid;
    const path ='/Images/albums/avatar/'+id;
    this.ref = this.afStorage.ref(path);
    this.ref.put(event.target.files[0]).then( data => {
      this.ngOnInit();
    })
  }

  getPicUrl(docid) {
    const id = "albumPic_"+docid;
    const path ='/Images/albums/avatar/'+id;
    const storageRef = this.afStorage.ref(path);
      storageRef.getDownloadURL().subscribe(data => {
        this.albumPic = data + "?ts="+ Math.random();
      })
  }

  getSongData() {
    this.songService.getDummySongs()
    .subscribe(result => {


      this.items = result;
      console.log(this.items);
    })
  }

  /*FIX: Problem with Album Data showing up in
  Songs page even though there are no songs.
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

  viewSong(item, docId) {
    //this.router.navigate(['/edit-song-details/' + item]);
    this.router.navigate(['/view-song-details/' + this.item.payload.doc.id]);
  }
}
