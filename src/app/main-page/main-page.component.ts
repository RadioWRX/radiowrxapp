import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      650: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit() {
  }

}
