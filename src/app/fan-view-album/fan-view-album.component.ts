import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlbumOptionsComponent } from '../modals/album-options/album-options.component';

@Component({
  selector: 'app-fan-view-album',
  templateUrl: './fan-view-album.component.html',
  styleUrls: ['./fan-view-album.component.scss']
})
export class FanViewAlbumComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) {}

  ngOnInit() {
  }

  openOptionsModal() {
    this.modalRef = this.modalService.show(AlbumOptionsComponent, {
      initialState: {
        title: 'Options',
        data: { }
      }
    });
  }

}
