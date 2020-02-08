import { Component, OnInit } from '@angular/core';
import { MembersService } from '../shared/services/members.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-bands-members',
  templateUrl: './my-bands-members.component.html',
  styleUrls: ['./my-bands-members.component.scss']
})
export class MyBandsMembersComponent implements OnInit {
  items: Array<any>;
  hideWhenNoMember: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private membersService: MembersService,
    public router: Router,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.membersService.getMembers()
    .subscribe(result => {
      this.items = result;
    })
  }

  viewMember(item) {
    this.router.navigate(['/view-member-details/' + item.payload.doc.id]);
  }

  dataState() {
    this.membersService.getMembers().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoMember = false;
        this.noData = true;
      } else {
        this.hideWhenNoMember = true;
        this.noData = false;
      }
    })
  }

  editMember(item) {
    this.router.navigate(['/edit-member-details/' + item.payload.doc.id]);
  }
}
