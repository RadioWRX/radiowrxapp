import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EventsService } from '../shared/services/events.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';



@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  eventPic: string = '/assets/images/no-avatar.gif';

  item: any;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor(
    private router: Router,
    private eventsService: EventsService,
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
      this.getData();
    })
  }

  getData() {
    /*this.membersService.getMembers()
    .subscribe(result => {
      console.log(result[0].payload.doc.id);
      this.getPicUrl(result[0].payload.doc.id);
      this.items = result;
    })*/
    console.log("Get Data" + this.item.id);
    this.getPicUrl(this.item.id);
  }

  upload(event, docid) {
    const id = "eventPic_"+ docid;
    const path ='/Images/events/avatar/'+id;
    this.ref = this.afStorage.ref(path);
    this.ref.put(event.target.files[0]).then( data => {
      this.ngOnInit();
    })
  }

  getPicUrl(docid) {
    const id = "eventPic_"+docid;
    const path ='/Images/events/avatar/'+id;
    const storageRef = this.afStorage.ref(path);
      storageRef.getDownloadURL().subscribe(data => {
        this.eventPic = data + "?ts="+ Math.random();
      })
  }

}
