import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-event-options',
  templateUrl: './event-options.component.html',
  styleUrls: ['./event-options.component.scss']
})
export class EventOptionsComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  purchaseTickets() {
    alert("Are you sure you want to purchase tickets?");
  }

  tellAFriend() {
    alert("Are you sure you want to tell a friend?");
  }

  markTheDate() {
    alert("Are you sure you want to mark the date?");
  }

}
