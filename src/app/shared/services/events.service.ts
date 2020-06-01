import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getEvent(eventKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('events').doc(eventKey).snapshotChanges();
  }

  updateEvent(eventKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('events').doc(eventKey).set(value);
  }

  deleteEvent(eventKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('events').doc(eventKey).delete();
  }

  getEvents() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('events').snapshotChanges();
  }
  getDummyEvents() {
    //this.userId = localStorage.getItem('user');
    return this.afs.collection('events').snapshotChanges();
  }

  createEvent(value) {
    this.userId = localStorage.getItem('user');
    // This code creates a duplicate database with no UserId.
    this.afs.collection('events').add({
      eventTitle: value.eventTitle,
      eventDescription: value.eventDescription,
      eventVenue: value.eventVenue,
      eventPostcode: value.eventPostcode,
      eventDate: value.eventDate,
      eventStartHour: value.eventStartHour,
      eventStartMinute: value.eventStartMinute,
      eventStartAmPm: value.eventStartAmPm,
      eventPrice: value.eventPrice,
      availableTickets: value.availableTickets
    })

    return this.afs.collection('users').doc(this.userId).collection('events').add({
      eventTitle: value.eventTitle,
      eventDescription: value.eventDescription,
      eventVenue: value.eventVenue,
      eventPostcode: value.eventPostcode,
      eventDate: value.eventDate,
      eventStartHour: value.eventStartHour,
      eventStartMinute: value.eventStartMinute,
      eventStartAmPm: value.eventStartAmPm,
      eventPrice: value.eventPrice,
      availableTickets: value.availableTickets
    })
  }
}
