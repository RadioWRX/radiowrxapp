import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MembersService } from '../shared/services/members.service';
import { AngularFireStorage, AngularFireStorageReference,
AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {
  file: File;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  memberForm: FormGroup;
  downloadURL;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private membersService: MembersService,
    private db: AngularFirestore,
    private afStorage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.memberForm = this.fb.group({
      memberName: ['', Validators.required ],
      memberBio: ['', Validators.required ],
      memberDOB: ['', Validators.required ],
      memberInstrument: ['', Validators.required ]
      //memberImage: ['', Validators.required]
    })
  }

  resetFields() {
    this.memberForm = this.fb.group({
      memberName: new FormControl('', Validators.required),
      memberBio: new FormControl('', Validators.required),
      memberDOB: new FormControl('', Validators.required),
      memberInstrument: new FormControl('', Validators.required)
      //memberImage: new FormControl('', Validators.required)
    })
  }

  onSubmit(value) {
    this.membersService.createMember(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-members']);
      }
    )
  }

  upload(event) {
    //const id = Math.random().toString(36).substring(2);
    //this.ref = this.afStorage.ref(id);
    //this.task = this.ref.put(event.target.files[0]);

    // The storage path
    const path = `images/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.afStorage.ref(path);

    // The main task
    this.task = this.afStorage.upload(path, this.file);

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('images').add( { downloadURL: this.downloadURL, path });
      }),
    );

  }
}
