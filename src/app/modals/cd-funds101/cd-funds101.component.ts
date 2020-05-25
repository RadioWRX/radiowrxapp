import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cd-funds101',
  templateUrl: './cd-funds101.component.html',
  styleUrls: ['./cd-funds101.component.scss']
})
export class CdFunds101Component implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
