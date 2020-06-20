import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlbumOptionsComponent } from '../modals/album-options/album-options.component';
import { AlbumService } from '../shared/services/album.service';
import { SongService } from '../shared/services/song.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';


@Component({
  selector: 'app-fan-view-album',
  templateUrl: './fan-view-album.component.html',
  styleUrls: ['./fan-view-album.component.scss']
})
export class FanViewAlbumComponent implements OnInit {
  modalRef: BsModalRef;

  ref: AngularFireStorageReference;

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
    private modalService: BsModalService,
    private router: Router,
    private albumService: AlbumService,
    private songService: SongService,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.getSongData();
      }
      this.getData();
      //console.log(this.item);
    })
  }

  getData() {
    /*this.membersService.getMembers()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })*/
    console.log("Dummy Album", this.item.dummyAlbumId);
    this.getPicUrl(this.item.dummyAlbumId);
  }

  getSongData() {
    this.songService.getDummySongs()
    .subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  getPicUrl(docid) {
    const id = "albumPic_" + docid;
    //const dummyId = id.slice(9);
    //console.log("Dummy Id is ", dummyId);
    const path ='/Images/albums/avatar/'+id;
    const storageRef = this.afStorage.ref(path);
      storageRef.getDownloadURL().subscribe(data => {
        this.albumPic = data + "?ts="+ Math.random();
      })
  }

  openOptionsModal() {
    this.modalRef = this.modalService.show(AlbumOptionsComponent, {
      initialState: {
        title: 'Options',
        data: { }
      }
    });
  }

}
