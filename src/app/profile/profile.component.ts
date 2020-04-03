import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { Router, Params } from "@angular/router";
import { AuthService } from '../shared/services/auth.service';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

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
  profilePic: string = null;

  constructor(
    public profileService: ProfileService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage
  ) {


  }

  ngOnInit() {
    this.getData();
    this.dataState()
  }

  getData() {
    this.profileService.getProfiles()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
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

/*FIX: Uploading of files works but is not connected to profile ID.
Need to allow upload and change of image accordingly.*/
  upload(event, docid) {
    
    const id = "profilePic_"+docid;
    const path = '/Images/profile/avatar/'+id;
    const storageRef = this.afStorage.ref(path);
    // this.task = this.ref.put(event.target.files[0]);
    const task = this.afStorage.upload(path, event.target.files[0]);  
    storageRef.getDownloadURL().subscribe(data =>{
      console.log(data);
     this.profilePic = data;
     this.ngOnInit();
    })
  }

  getPicUrl(docid)
  {
    
        const id = "profilePic_"+docid;
        const path = '/Images/profile/avatar/'+id;
        const storageRef = this.afStorage.ref(path);
         storageRef.getDownloadURL().subscribe(data =>{
           console.log(data);
          this.profilePic = data;
         })
        
    
  }
}
