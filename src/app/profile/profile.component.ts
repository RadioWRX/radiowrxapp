import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { Router, Params } from "@angular/router";
import { AuthService } from '../shared/services/auth.service';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';
import { UploadsService } from '../shared/services/uploads.service';
import { FileType } from '../shared/FileTyeEnum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  items: Array<any>
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;
  changingImage: boolean;
  profilePic: string = '/assets/images/no-avatar.gif';

  constructor(
    public profileService: ProfileService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage,
    private uploadService:UploadsService
  ) {

  }

  ngOnInit() {
    
    this.getData();
    this.dataState()
  }

  getData() {
    this.profileService.getProfiles()
    .subscribe(result => {      
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })
  }

  editProfile(item) {
    this.router.navigate(['/profile-details/' + item.payload.doc.id]);
  }

  logOut() {
    this.afAuth.logOut();
  }

  dataState() {
    this.profileService.getProfiles().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }


  upload(event, docid) {   
    this.uploadService.UploadFile(FileType.ProfilePicture,docid,event.target.files[0]).then(data=>{
      this.ngOnInit();
    })

  }
  
  getPicUrl(docid)
  {
        this.uploadService.GetFile(FileType.ProfilePicture, docid).subscribe(data =>{          
        this.profilePic = data + "?ts="+ Math.random();         
      })       
  }
    
}
