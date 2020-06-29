import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-event-creation-options',
  templateUrl: './event-creation-options.component.html',
  styleUrls: ['./event-creation-options.component.scss']
})
export class EventCreationOptionsComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
