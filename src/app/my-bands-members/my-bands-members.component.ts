import { Component, OnInit } from '@angular/core';
import { MembersService } from '../shared/services/members.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';


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

  constructor(
    private membersService: MembersService,
    public router: Router,
    private afAuth: AuthService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.membersService.getMembers()
    .subscribe(result => {
      console.log(result);
      /*for(let item of result)
      {
        console.log("Item" + item.payload.doc);
        this.getPicUrl(item.payload.doc.id);

      }*/
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

  editMember(item) {
    this.router.navigate(['/edit-member-details/' + item.payload.doc.id]);
  }

  viewMember(item) {
    this.router.navigate(['/view-member-details/' + item.payload.doc.id]);
  }

  getPicUrl(docid) {
    const id = "memberPic_"+docid;
    const path = '/Images/members/avatar/'+id;
    const storageRef = this.afStorage.ref(path);
     storageRef.getDownloadURL().subscribe(data =>{
      this.memberPic = data + "?ts="+ Math.random();
     })
  }
}
