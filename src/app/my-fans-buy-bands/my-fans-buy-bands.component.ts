import { Component, OnInit } from '@angular/core';
import { BandsbyfansService } from '../shared/services/bandsbyfans.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';


@Component({
  selector: 'app-my-fans-buy-bands',
  templateUrl: './my-fans-buy-bands.component.html',
  styleUrls: ['./my-fans-buy-bands.component.scss']
})
export class MyFansBuyBandsComponent implements OnInit {
  ref: AngularFireStorageReference;
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  //albumPic: string = '/assets/images/no-avatar.gif';

  constructor(
    private bandsbyfansService: BandsbyfansService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.bandsbyfansService.getBandsByFans()
    .subscribe(result => {
      this.items = result;
    })
  }

  dataState() {
    this.bandsbyfansService.getBandsByFans().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

}
