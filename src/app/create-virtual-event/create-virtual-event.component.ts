import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { VirtualEventService } from '../shared/services/virtual-event.service';


@Component({
  selector: 'app-create-virtual-event',
  templateUrl: './create-virtual-event.component.html',
  styleUrls: ['./create-virtual-event.component.scss']
})
export class CreateVirtualEventComponent implements OnInit {

  virtualEventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private virtualEventService: VirtualEventService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.virtualEventForm = this.fb.group({
      eventTitle: ['', Validators.required ],
      eventDescription: ['', Validators.required ],
      virtualEventUrl: ['', Validators.required ],
      eventDate: ['', Validators.required ],
      eventStartHour: ['', Validators.required ],
      eventStartMinute: ['', Validators.required ],
      eventStartAmPm: ['', Validators.required ],
      eventPrice: ['', Validators.required ],
      availableTickets: ['', Validators.required ],
      dummyEventId: [''],
      eventImageUrl: ['']
    })
  }

  resetFields() {
    this.virtualEventForm = this.fb.group({
      eventTitle: new FormControl('', Validators.required),
      eventDescription: new FormControl('', Validators.required),
      virtualEventUrl: ['', Validators.required ],
      eventDate: new FormControl('', Validators.required),
      eventStartHour: new FormControl('', Validators.required),
      eventStartMinute: new FormControl('', Validators.required),
      eventStartAmPm: new FormControl('', Validators.required),
      eventPrice: new FormControl('', Validators.required),
      availableTickets: new FormControl('', Validators.required),
      dummyAlbumId: new FormControl('')
    })
  }

  onSubmit(value) {


    var virtualDummyEventRef =  this.virtualEventService.createVirtualDummyEvent(value);

    virtualDummyEventRef.then(result =>{
      console.log("Dummy Event ID is ", result.id);
      value.dummyEventId = result.id;
      this.virtualEventService.createVirtualEvent(value)
      .then(
        res => {
          console.log("actual Event ID under user document, ", res.id);

          this.resetFields();
          this.location.back();

        }
      )
    })


  }

  /*onSubmit(value) {
    this.eventsService.createEvent(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-events']);
      }
    )
  }*/

}
