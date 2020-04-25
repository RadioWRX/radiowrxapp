import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EventsService } from '../shared/services/events.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private eventsService: EventsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.editEventForm();
      }
    })
  }

  editEventForm() {
    this.editForm = this.fb.group({
      eventTitle: [this.item.eventTitle, Validators.required],
      eventVenue: [this.item.eventVenue, Validators.required],
      eventDescription : [this.item.eventDescription, Validators.required],
      eventPostcode: [this.item.eventPostcode, Validators.required],
      eventDate: [this.item.eventDate.toDate(), Validators.required],
      eventStartHour: [this.item.eventStartHour, Validators.required],
      eventStartMinute: [this.item.eventStartMinute, Validators.required],
      eventStartAmPm: [this.item.eventStartAmPm, Validators.required],
      eventPrice : [this.item.eventPrice, Validators.required],
      availableTickets: [this.item.availableTickets, Validators.required]
    })
  }

  onSubmit(value){
    this.eventsService.updateEvent(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/my-bands-events']);
      }
    )
  }

  cancel() {
    this.router.navigate(['/my-bands-events']);
  }
}
