import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fan-view-event',
  templateUrl: './fan-view-event.component.html',
  styleUrls: ['./fan-view-event.component.scss']
})
export class FanViewEventComponent implements OnInit {

  lat: number = -23.8779431;
  lng: number = -49.8046873;
  postCode = '';
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
