import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventOptionsComponent } from '../modals/event-options/event-options.component';
import { EventsService } from '../shared/services/events.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-fan-view-event',
  templateUrl: './fan-view-event.component.html',
  styleUrls: ['./fan-view-event.component.scss']
})
export class FanViewEventComponent implements OnInit {
  modalRef: BsModalRef;

  ref: AngularFireStorageReference;

  eventPic: string = '/assets/images/no-avatar.gif';

  item: any;
  items: Array<any>;

  lat: number = -23.8779431;
  lng: number = -49.8046873;
  postCode = '';
  zoom: number = 15;

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.getSongData();
      }
      //this.getData();
      //console.log(this.item);
    })
  }

  getData() {
    /*this.membersService.getMembers()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })*/
    console.log("Get Data" + this.item.id);
    //this.getPicUrl(this.item.id);
  }

  getSongData() {
    this.eventsService.getDummyEvents()
    .subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  openEventOptionsModal() {
    this.modalRef = this.modalService.show(EventOptionsComponent, {
      initialState: {
        title: 'Options',
        data: { }
      }
    });
  }

  purchaseTickets() {
    alert("You need to register to purchase tickets.");
  }

}
