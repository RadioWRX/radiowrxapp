import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tickets101',
  templateUrl: './tickets101.component.html',
  styleUrls: ['./tickets101.component.scss']
})
export class Tickets101Component implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
