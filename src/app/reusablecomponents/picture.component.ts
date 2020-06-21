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
    @Input() PictureType: FileType;

    constructor(private afStorage:AngularFireStorage, private uploadService:UploadsService)
    {

    }

    ngOnInit(){
        this.getPicUrl();
    }

   getPicUrl() {
  
    this.uploadService.GetFile(this.PictureType, this.DocId).subscribe(data =>{

        this.allPic = data + "?ts="+ Math.random();
      })
    }



}
