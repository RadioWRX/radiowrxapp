import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PlaylistService } from '../shared/services/playlist.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {
  playlistForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private playlistService: PlaylistService,
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.playlistForm = this.fb.group({
      playlistTitle: ['', Validators.required ],
      description: ['', Validators.required ],
      albumId: [''],
      playlistImageUrl: ['']
    })
  }

  resetFields() {
    this.playlistForm = this.fb.group({
      playlistTitle: ['', Validators.required ],
      description: ['', Validators.required ],
      albumId: [''],
      playlistImageUrl: ['']
    })
  }

  onSubmit(value) {
    this.playlistService.createPlaylist(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-fans-music']);
      }
    )
  }

  cancel() {
    this.location.back();
  }

}
