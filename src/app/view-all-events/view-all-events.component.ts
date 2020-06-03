import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EventsService } from '../shared/services/events.service';
import { Router, Params } from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-view-all-events',
  templateUrl: './view-all-events.component.html',
  styleUrls: ['./view-all-events.component.scss']
})
export class ViewAllEventsComponent implements OnInit {

  eventItems: Array<any>;
  eventPic: string = '/assets/images/no-avatar.gif';

  // Custom options for the Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      650: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: true
  }

  constructor(
    private eventsService: EventsService,
    public router: Router,
    private afStorage: AngularFireStorage
    ) { }

  ngOnInit() {
    this.getEventsData()
  }

  //FIX: Work out how all users albums can be displayed.
  getEventsData() {
    this.eventsService.getDummyEvents()
    .subscribe(result => {
      this.eventItems = result;
      console.log("EventItems ", this.eventItems);
    })
  }

  /*viewEvent(item, docId) {
    this.router.navigate(['/fan-view-event-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
  }*/

}
