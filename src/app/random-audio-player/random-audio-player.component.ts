import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from '../shared/services/audio.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-random-audio-player',
  templateUrl: './random-audio-player.component.html',
  styleUrls: ['./random-audio-player.component.scss'],
    
})
export class RandomAudioPlayerComponent implements OnInit {

  public randomSong:string|"https://github.com/anars/blank-audio/blob/master/250-milliseconds-of-silence.mp3";

  constructor(private audioService:AudioService) {

    


   this.fetchSong();

     

   }
  

  ngOnInit() {
    
    
     

  }
  fetchSong(){

    if(this.randomSong == null)
    {

    var _songs = this.audioService.GetRandomAudioFile();
    _songs.subscribe(s=>{

           var songIndex = s.length > 0 ? Math.floor(Math.random() * (s.length - 0 + 1) + 0) : 0;            
           songIndex =  songIndex > (s.length-1) ? (s.length-1) : songIndex;
              
             this.randomSong =  s[songIndex].payload.doc.get("songurl") + "&ran="+Math.random();
             
              
           })
   
          }                 
  }
  

}
