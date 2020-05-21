import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EventOptionsComponent } from '../modals/event-options/event-options.component';

@Component({
  selector: 'app-fan-view-event',
  templateUrl: './fan-view-event.component.html',
  styleUrls: ['./fan-view-event.component.scss']
})
export class FanViewEventComponent implements OnInit {
  modalRef: BsModalRef;

  lat: number = -23.8779431;
  lng: number = -49.8046873;
  postCode = '';
  zoom: number = 15;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
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
