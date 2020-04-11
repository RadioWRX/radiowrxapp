import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MembersService } from '../shared/services/members.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {
  item: any;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  items: Array<any>

  memberPic: string = '/assets/images/no-avatar.gif';

  constructor(
    private router: Router,
    private membersService: MembersService,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
      }
    })
    this.getData();
  }

  getData() {
    this.membersService.getMembers()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })
  }


  upload(event, docid) {
    const id = "memberPic_"+ docid;
    const path ='/Images/members/avatar/'+id;
    this.ref = this.afStorage.ref(path);
    this.ref.put(event.target.files[0]).then( data => {
      this.ngOnInit();
    })
  }

  getPicUrl(docid) {
    const id = "memberPic_"+docid;
    const path ='/Images/members/avatar/'+id;
    const storageRef = this.afStorage.ref(path);
      storageRef.getDownloadURL().subscribe(data => {
        this.memberPic = data + "?ts="+ Math.random();
      })
  }
}
