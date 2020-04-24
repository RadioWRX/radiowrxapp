import { Injectable, Output } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FileType } from '../FileTyeEnum';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { storage } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  public ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  fileType: FileType;
  FileUrl: string;

  constructor(private afStorage: AngularFireStorage) {

  }

  

  UploadFile(fileType, docId, file) {

    this.task = this._uploadFile(docId, fileType, file);
    return this.task;
  }

  private _uploadFile(_docId,fileType,_file)
  {
    var path = '';
    var _id ='';

    switch (fileType) {
      case FileType.ProfilePicture:         
        path = '/Images/profile/avatar/' + "profilePic_" + _docId;
        break;
      case FileType.MemberPicture:         
        path = '/Images/members/avatar/' +"memberPic_" + _docId;
        break;
      case FileType.AlbumPicture:         
        path = '/Images/albums/avatar/' + "albumPic_" + _docId;
        break;
      case FileType.EventPicture:        
        path = '/Images/events/avatar/' + "eventPic_" + _docId;
        break;
        case FileType.BandSong:
          path ='/audio/albums/songs/'+ "songFile_"+_docId;
          break;
    }

    this.ref = this.afStorage.ref(path);    
    return this.ref.put(_file);    
  }

  GetFile(fileType, docId): Observable<any> {
   
    return this._getPicUrl(docId,fileType);

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
      case FileType.BandSong:
        path ='/audio/albums/songs/songFile_'+_docId;
        break;

    }


    this.ref = this.afStorage.ref(path);
    return this.ref.getDownloadURL();

  }



}
