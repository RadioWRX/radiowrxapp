import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VirtualEventService } from '../shared/services/virtual-event.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-virtual-event.component.html',
  styleUrls: ['./edit-virtual-event.component.scss']
})
export class EditVirtualEventComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private virtualEventService: VirtualEventService,
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
        this.editVirtualEventForm();
      }
    })
  }

  editVirtualEventForm() {
    this.editForm = this.fb.group({
      eventTitle: [this.item.eventTitle, Validators.required],
      virtualEventUrl: [this.item.virtualEventUrl, Validators.required],
      eventDescription : [this.item.eventDescription, Validators.required],
      eventDate: [this.item.eventDate.toDate(), Validators.required],
      eventStartHour: [this.item.eventStartHour, Validators.required],
      eventStartMinute: [this.item.eventStartMinute, Validators.required],
      eventStartAmPm: [this.item.eventStartAmPm, Validators.required],
      eventPrice : [this.item.eventPrice, Validators.required],
      availableTickets: [this.item.availableTickets, Validators.required]
    })
  }

  onSubmit(value){
    this.virtualEventService.updateVirtualEvent(this.item.id, value)
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
