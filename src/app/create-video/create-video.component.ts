import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { VideosService } from '../shared/services/videos.service';
import { ValidatorsService } from '../shared/services/validators.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.scss']
})
export class CreateVideoComponent implements OnInit {

  videoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private videosService: VideosService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.videoForm = this.fb.group({
      videoTitle: ['', Validators.required ],
      youTubeId: ['', Validators.required ],
      publishedDate: ['', Validators.required ],
      videoDescription: ['', Validators.required ]
    })
  }

  resetFields() {
    this.videoForm = this.fb.group({
      videoTitle: new FormControl('', Validators.required),
      youTubeId: new FormControl('', Validators.required),
      publishedDate: new FormControl('', Validators.required),
      videoDescription: new FormControl('', Validators.required)
    })
  }

  onSubmit(value) {
    this.videosService.createVideo(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-videos']);
      }
    )
  }


}
