import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  editForm: FormGroup;

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
    private fb: FormBuilder,
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
        this.editAlbumForm();
        this.getSongData();
        this.dataState();
      }
      this.getData();
    })
  }

  editAlbumForm() {
    this.editForm = this.fb.group({
      albumTitle: [this.item.albumTitle, Validators.required],
      albumGenre: [this.item.albumGenre, Validators.required],
      yearReleased: [this.item.yearReleased.toDate(), Validators.required],
      numberOfTracks: [this.item.numberOfTracks, Validators.required],
      upcCode: [this.item.upcCode, Validators.required],
      albumHours: [this.item.albumHours, Validators.required],
      albumMinutes: [this.item.albumMinutes, Validators.required],
      albumSeconds: [this.item.albumSeconds, Validators.required],
      description: [this.item.description, Validators.required],
      dummyAlbumId: [this.item.id, Validators.required],
    })
  }

  getData() {
    /*this.membersService.getMembers()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })*/
    //console.log("Get Data" + this.item.id);

    console.log("Get Data" + this.item.dummyAlbumId);
    this.getPicUrl(this.item.dummyAlbumId);
  }

  upload(event, docid) {
    const id = "albumPic_"+ docid;
    const path ='/Images/albums/avatar/'+id;
    this.ref = this.afStorage.ref(path);
    this.ref.put(event.target.files[0]).then( data => {
      this.ngOnInit();
    })
  }

  dummyUpload(event, docid) {
    const id = "albumPic_"+ docid;
    const path1 ='/dummy/albums/avatar/'+id;
    this.ref = this.afStorage.ref(path1);
    this.ref.put(event.target.files[0]).then( data => {
      //this.ngOnInit();
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

  onSubmit(value){
    this.albumService.updateAlbum(this.item.id, value)
    .then(
      res => {
        //this.router.navigate(['/my-bands-music']);
      }
    )
  }

  onSubmit1(value) {
    this.albumService.createDummyAlbum(value)
    .then(
      res => {
        //this.resetFields();
        //this.location.back();
        //this.router.navigate(['/my-bands-music']);
      }
    )
  }

  /*updateDummyAlbum(dummyAlbumId, value) {
    dummyAlbumId = this.item.id;
    console.log("DummyID is ", dummyAlbumId);
    this.albumService.updateDummyAlbum(this.item.id, value)
    .then() {

    })
  }*/


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
