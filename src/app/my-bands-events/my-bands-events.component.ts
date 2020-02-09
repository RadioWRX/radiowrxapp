import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/services/events.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-bands-events',
  templateUrl: './my-bands-events.component.html',
  styleUrls: ['./my-bands-events.component.scss']
})
export class MyBandsEventsComponent implements OnInit {
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor(
    private eventsService: EventsService,
    public router: Router,
    private afAuth: AuthService
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
}
