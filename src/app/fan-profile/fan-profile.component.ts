import { Component, OnInit } from '@angular/core';
import { FanProfileService } from '../shared/services/fan-profile.service';
import { Router, Params } from "@angular/router";
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';
import { UploadsService } from '../shared/services/uploads.service';
import { FileType } from '../shared/FileTyeEnum';

@Component({
  selector: 'app-fan-profile',
  templateUrl: './fan-profile.component.html',
  styleUrls: ['./fan-profile.component.scss']
})
export class FanProfileComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  items: Array<any>
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;
  profilePic: string = '/assets/images/no-avatar.gif';


  constructor(
    public fanProfileService: FanProfileService,
    public router: Router,
    private authService: AuthService,
    private afStorage: AngularFireStorage,
    private uploadService:UploadsService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState()
  }

  getData() {
    this.fanProfileService.getFanProfiles()
    .subscribe(result => {
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })
  }

  editFanProfile(item) {
    this.router.navigate(['/fan-profile-details/' + item.payload.doc.id]);
  }

  logOut() {
    this.authService.logOut();
  }

  dataState() {
    this.fanProfileService.getFanProfiles().subscribe(data => {
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

  getPicUrl(docid) {
    this.uploadService.GetFile(FileType.ProfilePicture, docid).subscribe(data =>{
    this.profilePic = data + "?ts="+ Math.random();
    })
  }

}
