import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VideosService } from '../shared/services/videos.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private videosService: VideosService,
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
        this.editVideoForm();
      }
    })
  }

  editVideoForm() {
    this.editForm = this.fb.group({
      videoTitle: [this.item.videoTitle, Validators.required],
      youTubeId: [this.item.youTubeId, Validators.required],
      videoDescription: [this.item.videoDescription, Validators.required],
      publishedDate: [this.item.publishedDate.toDate(), Validators.required]
    })
  }

  onSubmit(value){
    this.videosService.updateVideo(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/my-bands-videos']);
      }
    )
  }

  cancel() {
    this.router.navigate(['/my-bands-videos']);
  }
}
