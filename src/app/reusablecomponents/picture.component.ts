import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { UploadsService } from '../shared/services/uploads.service';
import { FileType } from '../shared/FileTyeEnum';


@Component({
    selector: 'app-picture',
    templateUrl: './picture.component.html'

  })

  export class Picture implements OnInit{

    private ref:AngularFireStorageReference;
    allPic:string = '/assets/images/no-avatar.gif';

    @Input() DocId;

    constructor(private afStorage:AngularFireStorage, private uploadService:UploadsService)
    {

    }

    ngOnInit(){
        this.getPicUrl();
        this.getAlbumPicUrl();
        this.getEventPicUrl();
    }

   getPicUrl() {
    this.uploadService.GetFile(FileType.MemberPicture, this.DocId).subscribe(data =>{
        this.allPic = data + "?ts="+ Math.random();
      })
    }

    getAlbumPicUrl() {
     this.uploadService.GetFile(FileType.AlbumPicture, this.DocId).subscribe(data =>{
         this.allPic = data + "?ts="+ Math.random();
       })
     }

     getEventPicUrl() {
      this.uploadService.GetFile(FileType.EventPicture, this.DocId).subscribe(data =>{
          this.allPic = data + "?ts="+ Math.random();
        })
      }

}
