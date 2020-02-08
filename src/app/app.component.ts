import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collapsed = true;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  constructor(
  ) { }

  ngOnInit() { }

}
