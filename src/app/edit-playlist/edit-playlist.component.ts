import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PlaylistService } from '../shared/services/playlist.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.scss']
})
export class EditPlaylistComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private playlistService: PlaylistService,
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
        this.editPlaylistForm();
      }
    })
  }

  editPlaylistForm() {
    this.editForm = this.fb.group({
      playlistTitle: [this.item.playlistTitle, Validators.required],
      description: [this.item.description, Validators.required]
    })
  }

  onSubmit(value){
    this.playlistService.updatePlaylist(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/my-fans-music']);
      }
    )
  }

  cancel() {
    this.router.navigate(['/my-fans-music']);
  }
}
