import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-videos101',
  templateUrl: './videos101.component.html',
  styleUrls: ['./videos101.component.scss']
})
export class Videos101Component implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
