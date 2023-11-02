import { Component } from '@angular/core';

@Component({
	selector: 'app-event-details',
	templateUrl: './event-details.component.html',
	styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
	username: string;
	eventName: string;

	constructor() {
		this.eventName = 'Qafila';
		this.username = 'kaustav';
	}

	contactClubCoordinator(contactNumber: string) {
		const message: string = `Hello, my name is ${this.username}. 
		I'm interested in the event ${this.eventName} happening soon. 
		Can you share more details about the event?	
		`;
		window.open(`https://wa.me/${contactNumber}?text=${message}`, '_blank');
	}
}
