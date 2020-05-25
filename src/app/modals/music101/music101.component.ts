import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-music101',
  templateUrl: './music101.component.html',
  styleUrls: ['./music101.component.scss']
})
export class Music101Component implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
