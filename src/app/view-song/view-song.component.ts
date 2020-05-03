import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SongService } from '../shared/services/song.service';


@Component({
  selector: 'app-view-song',
  templateUrl: './view-song.component.html',
  styleUrls: ['./view-song.component.scss']
})
export class ViewSongComponent implements OnInit {

  item: any;
  items: Array<any>;

  constructor(
    private router: Router,
    private songService: SongService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
      }
      this.getSongData();
    })
  }

  getSongData() {
    this.songService.getSongs()
    .subscribe(result => {


      this.items = result;
      console.log(this.items);
    })
  }

}
