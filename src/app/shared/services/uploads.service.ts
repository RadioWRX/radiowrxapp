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
  fileType:FileType;
  FileUrl:string;

  constructor(private afStorage: AngularFireStorage) {
    
   }

   UploadFile(fileType,docId,file)
   {
    switch (fileType) {
      case FileType.ProfilePicture:
        this.task = this._uploadProfilePic(docId,file);
        break;
    
      default:
        break;
    }
    return this.task;
   }

   GetFile(fileType,docId):Observable<any>
   {    
    var file;
      switch (fileType) {
        case FileType.ProfilePicture:
          file = this._getProfilePicUrl(docId);         
          break;
          case FileType.MemberPicture:
            file=this._getMemberPicUrl(docId);
        default:
          break;
      }

      return file;
     
   }

   private _uploadProfilePic(_docId,_file)
   {
    const _id = "profilePic_"+_docId;
    const path = '/Images/profile/avatar/'+_id;
    this.ref = this.afStorage.ref(path);   
    return this.ref.put(_file);
   }

   private _getProfilePicUrl(_docId):Observable<any>
   {
    const id = "profilePic_"+_docId;
    const path = '/Images/profile/avatar/'+id;
    this.ref = this.afStorage.ref(path);
    return this.ref.getDownloadURL();
    
   }

   private _getMemberPicUrl(_docId):Observable<any>
   {
    const id = "memberPic_"+ _docId;
    const path = '/Images/members/avatar/'+id;
    this.ref = this.afStorage.ref(path);
    return this.ref.getDownloadURL();
   }

}
