import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VirtualEventService {
  userId: string;
  docId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getVirtualEvent(virtualEventKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('virtual-events').doc(virtualEventKey).snapshotChanges();
  }

  getVirtualDummyEvent(virtualDummyEventKey) {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('virtual-events').doc(virtualDummyEventKey).snapshotChanges();
  }

  updateVirtualEvent(virtualEventKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('virtual-events').doc(virtualEventKey).set(value);
  }

  updateVirtualDummyEvent(virtualDummyEventKey, value) {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('virtual-events').doc(virtualDummyEventKey).set(value);
  }

  deleteVirtualEvent(virtualEventKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('virtual-events').doc(virtualEventKey).delete();
  }

  getVirtualEvents() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('virtual-events').snapshotChanges();
  }

  getVirtualDummyEvents() {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('virtual-events').snapshotChanges();
  }

  getAllVirtualEvents(){
    return this.afs.collection('virtual-events').snapshotChanges();
  }

  createVirtualEvent(value) {
    this.userId = localStorage.getItem('user');

    return this.afs.collection('users').doc(this.userId).collection('virtual-events').add({
      eventTitle: value.eventTitle,
      eventDescription: value.eventDescription,
      virtualEventUrl: value.virtualEventUrl,
      //eventVenue: value.eventVenue,
      //eventPostcode: value.eventPostcode,
      eventDate: value.eventDate,
      eventStartHour: value.eventStartHour,
      eventStartMinute: value.eventStartMinute,
      eventStartAmPm: value.eventStartAmPm,
      eventPrice: value.eventPrice,
      availableTickets: value.availableTickets,
      dummyEventId: value.dummyEventId,
      eventImageUrl: ''
    })
  }

  createVirtualDummyEvent(value) {

    // This code creates a duplicate database with no UserId.
    return this.afs.collection('virtual-events').add({
      eventTitle: value.eventTitle,
      eventDescription: value.eventDescription,
      virtualEventUrl: value.virtualEventUrl,
      //eventVenue: value.eventVenue,
      //eventPostcode: value.eventPostcode,
      eventDate: value.eventDate,
      eventStartHour: value.eventStartHour,
      eventStartMinute: value.eventStartMinute,
      eventStartAmPm: value.eventStartAmPm,
      eventPrice: value.eventPrice,
      availableTickets: value.availableTickets,
      dummyEventId: value.dummyEventId,
      eventImageUrl: ''
    })
  }
}
