import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { VirtualEventService } from '../shared/services/virtual-event.service';

@Injectable()
export class ViewVirtualEventResolver implements Resolve<any> {

  constructor(public virtualEventService: VirtualEventService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let virtualEventId = route.paramMap.get('id');
      this.virtualEventService.getVirtualEvent(virtualEventId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
