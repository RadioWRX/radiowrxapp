import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { FanProfileService } from '../shared/services/fan-profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-edit-fan-profile',
  templateUrl: './edit-fan-profile.component.html',
  styleUrls: ['./edit-fan-profile.component.scss']
})
export class EditFanProfileComponent implements OnInit {

  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    public fanProfileService: FanProfileService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private afAuth: AuthService
  ) { }

  // Initiate Reactive Form to create profiles.
  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.editProfileForm();
      }
    })
  }

  editProfileForm() {
    this.editForm = this.fb.group({
      name: [this.item.name, Validators.required],
      gender: [this.item.gender, Validators.required],
      dob: [this.item.dob.toDate(), Validators.required],
      addressOne: [this.item.addressOne, Validators.required],
      addressTwo: [this.item.addressTwo, Validators.required],
      town: [this.item.town, Validators.required],
      country: [this.item.country, Validators.required],
      postCode: [this.item.postCode, Validators.required],
      contactNumber: [this.item.contactNumber, Validators.required]
    });
  }

  onSubmit(value){
    this.fanProfileService.updateFanProfile(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/fan-profile']);
      }
    )
  }

  delete(){
    this.fanProfileService.deleteFanProfile(this.item.id)
    .then(
      res => {
        this.router.navigate(['/fan-profile']);
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel() {
    this.router.navigate(['/fan-profile']);
  }

}
