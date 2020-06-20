import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getTicket(ticketKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('tickets').doc(ticketKey).snapshotChanges();
  }

  getTickets() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('tickets').snapshotChanges();
  }

  createTicket(value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('tickets').add({
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
