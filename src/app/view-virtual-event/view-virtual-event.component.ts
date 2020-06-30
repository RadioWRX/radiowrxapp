import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { VirtualEventService } from '../shared/services/virtual-event.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, timestamp } from 'rxjs/operators';
import { UploadsService } from '../shared/services/uploads.service';
import { FileType } from '../shared/FileTyeEnum';



@Component({
  selector: 'app-view-event',
  templateUrl: './view-virtual-event.component.html',
  styleUrls: ['./view-virtual-event.component.scss']
})
export class ViewVirtualEventComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  eventPic: string = '/assets/images/no-avatar.gif';

  item: any;
  dummyEvent: any;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  postCode = '';
  zoom: number = 15;

  constructor(
    private router: Router,
    private virtualEventService: VirtualEventService,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage,
    private uploadService: UploadsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.dummyEvent = data.payload.data();
        console.log("Dummy Event is ", this.dummyEvent);
      }
      this.getData();
      this.getPostCode();
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
    this.uploadService.UploadFile(FileType.EventPicture,docid,event.target.files[0])
      .then(data=>{
        console.log("Data is ", data);
        this.uploadService.GetFile(FileType.EventPicture,docid).subscribe(url=> {
          this.dummyEvent.eventImageUrl = url;
          this.dummyEvent.dummyEventId = docid;
          this.virtualEventService.updateVirtualDummyEvent(this.item.dummyEventId, this.dummyEvent)
          console.log("Event URL is ", url);
        })
      this.ngOnInit();
    })
  }

  /*upload(event, docid) {
    const id = "eventPic_"+ docid;
    const path ='/Images/events/avatar/'+id;
    this.ref = this.afStorage.ref(path);
    this.ref.put(event.target.files[0]).then( data => {
      this.ngOnInit();
    })
  }*/

  getPicUrl(docid) {

    try {
      const id = "eventPic_"+docid;
      const path ='/Images/events/avatar/'+id;
      const storageRef = this.afStorage.ref(path);
        storageRef.getDownloadURL().subscribe(data => {
          if(data!=null && data!=undefined) {
            this.eventPic = data + "?ts="+ Math.random();
          }
        })
    }
    catch{

    }
  }

  getPostCode() {
    this.postCode = this.item.eventPostcode;
    console.log("Postcode is " + this.postCode);
  }

}
