import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/services/events.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';


@Component({
  selector: 'app-my-fans-events',
  templateUrl: './my-fans-events.component.html',
  styleUrls: ['./my-fans-events.component.scss']
})
export class MyFansEventsComponent implements OnInit {

  ref: AngularFireStorageReference;
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  eventPic: string = '/assets/images/no-avatar.gif';


  constructor(
    private eventsService: EventsService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.eventsService.getEvents()
    .subscribe(result => {
      this.items = result;
    })
  }

  dataState() {
    this.eventsService.getEvents().subscribe(data => {
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

}
