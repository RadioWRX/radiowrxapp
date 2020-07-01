import {Injectable} from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';


import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AudioService{


    randomSong :Observable<string>;

    constructor(private afs:AngularFirestore)
    {
      this.GetRandomAudioFile();
    }

    public GetRandomAudioFile():Observable<any>
    {
      var _songs = this.afs.collection('songs').snapshotChanges();        
          // _songs.subscribe(s=>{

          //   var songIndex = s.length > 0 ? Math.floor(Math.random() * (s.length - 0 + 1) + 0) : 0;
          //   songIndex =  songIndex > (s.length-1) ? (s.length-1) : songIndex;

          //     this.randomSong =  s[songIndex].payload.doc.get("songurl");
          //     console.log(this.randomSong);
          //   })

        return _songs;

    }

}
