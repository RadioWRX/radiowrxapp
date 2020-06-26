import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { PlaylistService } from '../shared/services/playlist.service';

@Injectable()
export class ViewPlaylistResolver implements Resolve<any> {

  constructor(public playlistService: PlaylistService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let playlistId = route.paramMap.get('id');
      this.playlistService.getPlaylist(playlistId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
