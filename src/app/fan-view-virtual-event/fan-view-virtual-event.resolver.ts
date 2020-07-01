import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { VirtualEventService } from '../shared/services/virtual-event.service';

@Injectable()
export class FanViewVirtualEventResolver implements Resolve<any> {

  constructor(public virtualEventService: VirtualEventService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let eventId = route.paramMap.get('id');
      this.virtualEventService.getVirtualDummyEvent(eventId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
