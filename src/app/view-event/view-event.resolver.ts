import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { EventsService } from '../shared/services/events.service';

@Injectable()
export class ViewEventResolver implements Resolve<any> {

  constructor(public eventService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let eventId = route.paramMap.get('id');
      this.eventService.getEvent(eventId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
