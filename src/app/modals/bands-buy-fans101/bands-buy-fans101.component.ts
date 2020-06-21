import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bands-buy-fans101',
  templateUrl: './bands-buy-fans101.component.html',
  styleUrls: ['./bands-buy-fans101.component.scss']
})
export class BandsBuyFans101Component implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
