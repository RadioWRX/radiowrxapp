import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from '../shared/services/album.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SomeComponent } from '../some/some.component';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {
  modalRef: BsModalRef;
  albumForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private albumService: AlbumService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.albumForm = this.fb.group({
      albumTitle: ['', Validators.required ],
      albumGenre: ['', Validators.required ],
      yearReleased: ['', Validators.required ],
      numberOfTracks: ['', Validators.required ],
      description: ['', Validators.required ],
      upcCode: ['', Validators.required ],
      albumHours: ['', Validators.required ],
      albumMinutes: ['', Validators.required ],
      albumSeconds: ['', Validators.required ],
      dummyAlbumId: [''],
    })
  }

  resetFields() {
    this.albumForm = this.fb.group({
      albumTitle: new FormControl('', Validators.required),
      albumGenre: new FormControl('', Validators.required),
      yearReleased: new FormControl('', Validators.required),
      numberOfTracks: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      upcCode: new FormControl('', Validators.required),
      albumHours: new FormControl('', Validators.required),
      albumMinutes: new FormControl('', Validators.required),
      albumSeconds: new FormControl('', Validators.required),
      dummyAlbumId: new FormControl('')
    })
  }

  onSubmit(value) {
    this.albumService.createAlbum(value)
    .then(
      res => {
        this.resetFields();
        this.location.back();
        //this.router.navigate(['/my-bands-music']);
      }
    )
  }

  cancel() {
    this.location.back();
  }

  openModal() {
    this.modalRef = this.modalService.show(SomeComponent, {
      initialState: {
        title: 'UPC/EAN',
        data: { }
      }
    });
  }
}
