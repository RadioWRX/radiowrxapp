import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FileType } from '../FileTyeEnum';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { storage } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  fileType: FileType;
  FileUrl: string;

  constructor(private afStorage: AngularFireStorage) {

  }

  UploadFile(fileType, docId, file) {
    switch (fileType) {
      case FileType.ProfilePicture:
        this.task = this._uploadProfilePic(docId, file);
        break;

      default:
        break;
    }
    return this.task;
  }

  GetFile(fileType, docId): Observable<any> {
   
    return this._getPicUrl(docId,fileType);

  }

  private _uploadProfilePic(_docId, _file) {
    const _id = "profilePic_" + _docId;
    const path = '/Images/profile/avatar/' + _id;
    this.ref = this.afStorage.ref(path);
    return this.ref.put(_file);
  }

  private _getPicUrl(_docId, fileType): Observable<any> {
    
    let path = null;

    switch (fileType) {
      case FileType.ProfilePicture:
        path = '/Images/profile/avatar/profilePic_' + _docId;
        break;
      case FileType.MemberPicture:
        path = '/Images/members/avatar/memberPic_' + _docId;
        break;
      case FileType.AlbumPicture:
        path = '/Images/albums/avatar/albumPic_' + _docId;
        break;
      case FileType.EventPicture:
        path = '/Images/events/avatar/eventPic_' + _docId;
        break;

    }


    this.ref = this.afStorage.ref(path);
    return this.ref.getDownloadURL();

  }



}
