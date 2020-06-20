import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { ProfileService } from '../shared/services/profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    public profileService: ProfileService,
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
      artistName: [this.item.artistName, Validators.required],
      artistGenre: [this.item.artistGenre, Validators.required],
      yearFormed: [this.item.yearFormed.toDate(), Validators.required],
      addressOne: [this.item.addressOne, Validators.required],
      addressTwo: [this.item.addressTwo, Validators.required],
      artistTown: [this.item.artistTown, Validators.required],
      artistCountry: [this.item.artistCountry, Validators.required],
      postCode: [this.item.postCode, Validators.required],
      contactNumber: [this.item.contactNumber, Validators.required]
    });
  }

  /*openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.item.avatar = result.link;
      }
    });
  }*/

  onSubmit(value){
    this.profileService.updateProfile(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/profile']);
      }
    )
  }

  delete(){
    this.profileService.deleteProfile(this.item.id)
    .then(
      res => {
        this.router.navigate(['/profile']);
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel() {
    this.router.navigate(['/profile']);
  }
}
