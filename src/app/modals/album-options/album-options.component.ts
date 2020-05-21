import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-album-options',
  templateUrl: './album-options.component.html',
  styleUrls: ['./album-options.component.scss']
})
export class AlbumOptionsComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
