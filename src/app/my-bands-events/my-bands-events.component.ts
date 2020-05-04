import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/services/events.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-my-bands-events',
  templateUrl: './my-bands-events.component.html',
  styleUrls: ['./my-bands-events.component.scss']
})
export class MyBandsEventsComponent implements OnInit {
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

  editEvent(item) {
    this.router.navigate(['/edit-event-details/' + item.payload.doc.id]);
  }

  viewEvent(item) {
    this.router.navigate(['/view-event-details/' + item.payload.doc.id]);
  }

// TODO: This functionality would be cleaner within a modal.
  deleteEvent(item) {
    if (window.confirm('Are you sure you want to delete this member?')) {
      this.eventsService.deleteEvent(item.payload.doc.id);
    }
  }
}
