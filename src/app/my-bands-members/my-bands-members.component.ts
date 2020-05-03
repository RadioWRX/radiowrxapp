import { Component, OnInit } from '@angular/core';
import { MembersService } from '../shared/services/members.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmComponent } from '../modals/confirm/confirm.component';

@Component({
  selector: 'app-my-bands-members',
  templateUrl: './my-bands-members.component.html',
  styleUrls: ['./my-bands-members.component.scss']
})
export class MyBandsMembersComponent implements OnInit {
  ref: AngularFireStorageReference;
  items: Array<any>;
  hideWhenNoMember: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;
  memberPic: string = '/assets/images/no-avatar.gif';
  modalRef: BsModalRef;

  constructor(
    private membersService: MembersService,
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
    this.membersService.getMembers()
    .subscribe(result => {
      this.items = result;
    })
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

  openConfirmModal() {
    this.modalRef = this.modalService.show(ConfirmComponent, {
      initialState: {
        class: 'modal-sm',
        title: 'Confirm',
        data: { }
      }
    });
  }

  editMember(item) {
    this.router.navigate(['/edit-member-details/' + item.payload.doc.id]);
  }

  viewMember(item) {
    this.router.navigate(['/view-member-details/' + item.payload.doc.id]);
  }

  deleteMember(item) {
    if (window.confirm('Are you sure you want to delete this member?')) {
      this.membersService.deleteMember(item.payload.doc.id);
    }
  }

  //  getPicUrl(item) {
  //   console.log("getPIc called");
  //   const id = "memberPic_"+ item.payload.doc.id;
  //   const path = '/Images/members/avatar/'+id;
  //   this.ref = this.afStorage.ref(path);
  //   //console.log("getPicUrl "+item);
  //    this.ref.getDownloadURL().subscribe(data =>{

  //      this.memberPic = data + "?ts="+ Math.random();
  //    });

  //}
}
