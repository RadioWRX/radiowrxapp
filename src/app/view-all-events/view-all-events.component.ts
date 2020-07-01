import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EventsService } from '../shared/services/events.service';
import { VirtualEventService } from '../shared/services/virtual-event.service';
import { Router, Params } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-view-all-events',
  templateUrl: './view-all-events.component.html',
  styleUrls: ['./view-all-events.component.scss']
})
export class ViewAllEventsComponent implements OnInit {

  liveItems: Array<any>;
  virtualItems: Array<any>;
  eventPic: string = '/assets/images/no-avatar.gif';

  constructor(
    private eventsService: EventsService,
    private virtualEventService: VirtualEventService,
    public router: Router,
    private afStorage: AngularFireStorage
    ) { }

  ngOnInit() {
    this.getLiveEventData();
    this.getVirtualEventData();
  }

  //FIX: Work out how all users albums can be displayed.
  getLiveEventData() {
    this.eventsService.getDummyEvents()
    .subscribe(result => {
      this.liveItems = result;
      console.log("EventItems ", this.liveItems);
    })
  }

  getVirtualEventData() {
    this.virtualEventService.getVirtualDummyEvents()
    .subscribe(result => {
      this.virtualItems = result;
    })
  }

  viewLiveEvent(item, docId) {
    this.router.navigate(['/fan-view-event-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
  }

  viewVirtualEvent(item, docId) {
    this.router.navigate(['/fan-view-virtual-event-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
  }

}
