import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FanProfileService } from '../shared/services/fan-profile.service';

@Injectable()
export class EditFanProfileResolver implements Resolve<any> {

  constructor(public fanProfileService: FanProfileService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let fanProfileId = route.paramMap.get('id');
      this.fanProfileService.getFanProfile(fanProfileId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
