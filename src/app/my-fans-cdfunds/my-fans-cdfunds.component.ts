import { Component, OnInit } from '@angular/core';
import { CdfundsService } from '../shared/services/cdfunds.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

@Component({
  selector: 'app-my-fans-cdfunds',
  templateUrl: './my-fans-cdfunds.component.html',
  styleUrls: ['./my-fans-cdfunds.component.scss']
})
export class MyFansCDFundsComponent implements OnInit {
  ref: AngularFireStorageReference;
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  //albumPic: string = '/assets/images/no-avatar.gif';


constructor(
  private cdfundsService: CdfundsService,
  public router: Router,
  private afAuth: AuthService,
  private afStorage: AngularFireStorage
) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.cdfundsService.getCdFunds()
    .subscribe(result => {
      this.items = result;
    })
  }

  dataState() {
    this.cdfundsService.getCdFunds().subscribe(data => {
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
