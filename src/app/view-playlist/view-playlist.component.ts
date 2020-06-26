import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaylistService } from '../shared/services/playlist.service';
import { PlaylistSongService } from '../shared/services/playlist-song.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';
import { UploadsService } from '../shared/services/uploads.service';
import { FileType } from '../shared/FileTyeEnum';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.scss']
})
export class ViewPlaylistComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  playlistPic: string = '/assets/images/no-avatar.gif';

  item: any;
  items: Array<any>;
  hideWhenNoAlbumData: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private router: Router,
    private playlistService: PlaylistService,
    private fb: FormBuilder,
    private playlistSongService: PlaylistSongService,
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
        //this.getPlaylistSongData();
        //this.dataState();
      }
      this.getData();
    })
  }

  getData() {
    this.getPicUrl(this.item.id);
  }

  upload(event, docid) {
    this.uploadService.UploadFile(FileType.PlaylistPicture,docid,event.target.files[0])
      .then(data=>{
        console.log("Data is ", data);
        this.uploadService.GetFile(FileType.PlaylistPicture,docid).subscribe(url=> {
          //this.dummyAlbum.albumImageUrl = url;
          //this.dummyAlbum.dummyAlbumId = docid;
          //this.playlistService.updatePlaylist(event, docid);
          console.log("Playlist URL is ", url);
        })
      this.ngOnInit();
    })
  }

  getPicUrl(docid) {

    try{
      const id = "playlistPic_"+docid;
      const path ='/Images/playlist/avatar/'+id;
      const storageRef = this.afStorage.ref(path);
        storageRef.getDownloadURL().subscribe(data => {
          if(data!=null && data!=undefined)
          {
          this.playlistPic = data + "?ts="+ Math.random();
          }
        })

    }
    catch{

    }

  }

  /*getPlaylistSongData() {
    this.playlistSongService.getPlaylistSongs()
    .subscribe(result => {


      this.items = result;
      console.log(this.items);
    })
  }*/

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

  /*dataState() {
    this.playlistSongService.getPlaylists().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoAlbumData = false;
        this.noData = true;
      } else {
        this.hideWhenNoAlbumData = true;
        this.noData = false;
      }
    })
  }*/

}
