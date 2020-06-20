import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { EventsService } from '../shared/services/events.service';

@Injectable()
export class FanViewEventResolver implements Resolve<any> {

  constructor(public eventsService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let eventId = route.paramMap.get('id');
      this.eventsService.getDummyEvent(eventId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
