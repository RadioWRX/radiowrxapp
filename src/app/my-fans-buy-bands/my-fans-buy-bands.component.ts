import { Component, OnInit } from '@angular/core';
import { BandsbyfansService } from '../shared/services/bandsbyfans.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BandsBuyFans101Component } from '../modals/bands-buy-fans101/bands-buy-fans101.component';

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
  modalRef: BsModalRef;
  //albumPic: string = '/assets/images/no-avatar.gif';

  constructor(
    private bandsbyfansService: BandsbyfansService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage,
    private modalService: BsModalService
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

  openModal() {
    this.modalRef = this.modalService.show(BandsBuyFans101Component, {
      initialState: {
        title: 'Fans Buy Bands Explained',
        data: { }
      }
    });
  }
}
