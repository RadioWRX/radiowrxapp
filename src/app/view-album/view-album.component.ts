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
import { UploadsService } from '../shared/services/uploads.service';
import { FileType } from '../shared/FileTyeEnum';

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
  dummyAlbum: any;
  hideWhenNoAlbumData: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private router: Router,
    private albumService: AlbumService,
    private fb: FormBuilder,
    private songService: SongService,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage,
    private uploadService: UploadsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.dummyAlbum = data.payload.data();
        console.log("Dummy Album is ", this.dummyAlbum);
        this.getSongData();
        this.dataState();
      }
      this.getData();
    })
  }

  getData() {


    //console.log("Get Data" + this.item.dummyAlbumId);
    this.getPicUrl(this.item.id);
  }

  getSongData() {
    this.songService.getSongs()
    .subscribe(result => {
      this.items = result;
      console.log("Song Data is ", this.items);
    })
  }

  upload(event, docid) {
    this.uploadService.UploadFile(FileType.AlbumPicture,docid,event.target.files[0])
      .then(data=>{
        console.log("Data is ", data);
        this.uploadService.GetFile(FileType.AlbumPicture,docid).subscribe(url=> {
          this.dummyAlbum.albumImageUrl = url;
          this.dummyAlbum.dummyAlbumId = docid;
          this.albumService.updateDummyAlbum(this.item.dummyAlbumId, this.dummyAlbum)
          console.log("Album URL is ", url);
        })
      this.ngOnInit();
    })
  }

  getPicUrl(docid) {

    try{
      const id = "albumPic_"+docid;
      const path ='/Images/albums/avatar/'+id;
      const storageRef = this.afStorage.ref(path);
        storageRef.getDownloadURL().subscribe(data => {
          if(data!=null && data!=undefined)
          {
          this.albumPic = data + "?ts="+ Math.random();
          }
        })

    }
    catch{

    }

  }

  // FIX: Has to better soultion than this to update
  // existing database record with dummAlbumId.
  onSubmit(value){
    //console.log("submitting album information")
    //this.albumService.updateAlbum(this.item.id, value)
    /*.then(
      res => {
        this.ngOnInit();
        //alert("Image Uploaded!");
        //this.router.navigate(['/my-bands-music']);
      }
    )*/
  }

  /*onSubmit1(value) {
    this.albumService.createDummyAlbum(value)
    /*.then(
      res => {
        this.ngOnInit();
        //console.log("Done");
        //this.resetFields();
        //this.location.back();
      //this.router.navigate(['/my-bands-music']);
      alert("Image Uploaded!");
      }
    )
  }*/

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
