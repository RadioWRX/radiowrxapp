import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { ProfileService } from '../shared/services/profile.service';

@Injectable()
export class EditFanProfileResolver implements Resolve<any> {

  constructor(public profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let profileId = route.paramMap.get('id');
      this.profileService.getProfile(profileId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
