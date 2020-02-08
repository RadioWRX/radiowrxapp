import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MembersService } from '../shared/services/members.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private membersService: MembersService,
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
        this.editMemberForm();
      }
    })
  }

  editMemberForm() {
    this.editForm = this.fb.group({
      memberName: [this.item.memberName, Validators.required],
      memberInstrument: [this.item.memberInstrument, Validators.required],
      memberDOB: [this.item.memberDOB, Validators.required],
      memberBio: [this.item.memberBio, Validators.required],
      //memberImage: [this.item.memberImage, Validators.required]
    })
  }

  onSubmit(value){
    this.membersService.updateMember(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/my-bands-members']);
      }
    )
  }

  cancel() {
    this.router.navigate(['/my-bands-members']);
  }
}
