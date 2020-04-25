import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlbumService } from '../shared/services/album.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss']
})
export class EditAlbumComponent implements OnInit {

  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private albumService: AlbumService,
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
        this.editAlbumForm();
      }
    })
  }

  editAlbumForm() {
    this.editForm = this.fb.group({
      albumTitle: [this.item.albumTitle, Validators.required],
      albumGenre: [this.item.albumGenre, Validators.required],
      yearReleased: [this.item.yearReleased.toDate(), Validators.required],
      numberOfTracks: [this.item.numberOfTracks, Validators.required],
      upcCode: [this.item.upcCode, Validators.required],
      albumHours: [this.item.albumHours, Validators.required],
      albumMinutes: [this.item.albumMinutes, Validators.required],
      albumSeconds: [this.item.albumSeconds, Validators.required],
      description: [this.item.description, Validators.required]
    })
  }

  onSubmit(value){
    this.albumService.updateAlbum(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/my-bands-music']);
      }
    )
  }

  cancel() {
    this.router.navigate(['/my-bands-music']);
  }

}
