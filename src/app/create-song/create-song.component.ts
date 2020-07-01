import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SongService } from '../shared/services/song.service';
import { UploadsService } from '../shared/services/uploads.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IsrcComponent } from '../modals/isrc/isrc.component';
import { IswcComponent } from '../modals/iswc/iswc.component';
import { WritersComponent } from '../modals/writers/writers.component';
import { PublisherComponent } from '../modals/publisher/publisher.component';
import { LabelComponent } from '../modals/label/label.component';
import { ProductComponent } from '../modals/product/product.component';
import { DiscComponent } from '../modals/disc/disc.component';
import { GridComponent } from '../modals/grid/grid.component';
import { BundlenameComponent } from '../modals/bundlename/bundlename.component';
import { BundleidComponent } from '../modals/bundleid/bundleid.component';
import { ProductnameComponent } from '../modals/productname/productname.component';
import { UUID } from 'angular2-uuid';
import { FileType } from '../shared/FileTyeEnum';
import { firestore } from 'firebase';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
  modalRef: BsModalRef;
  songForm: FormGroup;
  songFile:File;
  task: AngularFireUploadTask;
  songId:string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private songService: SongService,
    private modalService: BsModalService,
    private uploadService:UploadsService
  ) {

      songService.docId = localStorage.getItem("docId")
      songService.userId = localStorage.getItem("user");
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.songForm = this.fb.group({
      songTitle: ['', Validators.required ],
      songNumber: ['', Validators.required ],
      songWriters: ['', Validators.required ],
      durationMinutes: ['', Validators.required ],
      durationSeconds: ['', Validators.required ],
      publisher: ['', Validators.required ],
      //bundleName: ['', Validators.required ],
      isrcCode: ['', Validators.required ],
      iswcCode: ['', Validators.required ],
      labelName: ['', Validators.required ],
      productCatalogueNumber: ['', Validators.required ],
      discNumber: ['', Validators.required ],
      grid: ['', Validators.required ],
      //bundleId: ['', Validators.required ],
      //productName: ['', Validators.required ],
      description: ['', Validators.required ],
      songFile:['', Validators.required],
      songId:[''],
      songurl:['']
    })
  }

  resetFields() {
    this.songForm = this.fb.group({
      songTitle: new FormControl('', Validators.required),
      songNumber: new FormControl('', Validators.required),
      songWriters: new FormControl('', Validators.required),
      durationMinutes: new FormControl('', Validators.required),
      durationSeconds: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      //bundleName: new FormControl('', Validators.required),
      isrcCode: new FormControl('', Validators.required),
      iswcCode: new FormControl('', Validators.required),
      labelName: new FormControl('', Validators.required),
      productCatalogueNumber: new FormControl('', Validators.required),
      discNumber: new FormControl('', Validators.required),
      grid: new FormControl('', Validators.required),
      //bundleId: new FormControl('', Validators.required),
      //productName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      songId:[''],
      songurl:['']
    })
  }

  onFileChange(event){

    if(event.target.files!=null && event.target.files.length > 0) {

      this.songFile = event.target.files[0];
    }
  }

  onSubmit(value) {

    var  _songId = UUID.UUID();
    value.songId=_songId;
    this.task = this.uploadService.UploadFile(FileType.BandSong,_songId,this.songFile);

    this.task.percentageChanges().subscribe(()=>{
      document.getElementById("CreateSong").innerText = "Uploading...";
      document.getElementById("CreateSong").setAttribute("disabled","disabled");
    })


    this.task.then(()=>{

      this.uploadService.GetFile(FileType.BandSong,_songId).subscribe(url=>{

        value.songurl = url;
        console.log("Submitting..." + value);

        this.songService.createSong(value)
        .then(
          res => {
            this.resetFields();
            this.location.back();
            //this.router.navigate(['/view-album-details']);
          }
        )

        this.songService.createDummySong(value)
        .then(
          res => {
            this.resetFields();
            this.location.back();
            //this.router.navigate(['/view-album-details']);
          }
        )

        this.songService.createRandomSong(value)
        .then(
          res => {
            this.resetFields();
            this.location.back();
            //this.router.navigate(['/view-album-details']);
          }
        )

      })



    })









  }

  cancel() {
    this.location.back();
  }

// Thi section deals with the Modals to show extra information
  openISRCModal() {
    this.modalRef = this.modalService.show(IsrcComponent, {
      initialState: {
        title: 'ISRC',
        data: { }
      }
    });
  }

  openISWCModal() {
    this.modalRef = this.modalService.show(IswcComponent, {
      initialState: {
        title: 'ISWC',
        data: { }
      }
    });
  }

  openWritersModal() {
    this.modalRef = this.modalService.show(WritersComponent, {
      initialState: {
        title: 'Writers',
        data: { }
      }
    });
  }

  openPublisherModal() {
    this.modalRef = this.modalService.show(PublisherComponent, {
      initialState: {
        title: 'Publisher',
        data: { }
      }
    });
  }

  openLabelNameModal() {
    this.modalRef = this.modalService.show(LabelComponent, {
      initialState: {
        title: 'Label Name',
        data: { }
      }
    });
  }

  openProductCatModal() {
    this.modalRef = this.modalService.show(ProductComponent, {
      initialState: {
        title: 'Product Catalogue No.',
        data: { }
      }
    });
  }

  openDiscNoModal() {
    this.modalRef = this.modalService.show(DiscComponent, {
      initialState: {
        title: 'Disc No.',
        data: { }
      }
    });
  }

  openGRIDModal() {
    this.modalRef = this.modalService.show(GridComponent, {
      initialState: {
        title: 'GRID',
        data: { }
      }
    });
  }

  openBundleNameModal() {
    this.modalRef = this.modalService.show(BundlenameComponent, {
      initialState: {
        title: 'Bundle Name',
        data: { }
      }
    });
  }

  openBundleIdModal() {
    this.modalRef = this.modalService.show(BundleidComponent, {
      initialState: {
        title: 'Bundle Id',
        data: { }
      }
    });
  }

  openProductNameModal() {
    this.modalRef = this.modalService.show(ProductnameComponent, {
      initialState: {
        title: 'Product Name',
        data: { }
      }
    });
  }

}
