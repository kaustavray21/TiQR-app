import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventDataService } from 'src/app/services/event-data-service.service';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
	events: Event[] = [];

	today: Date;

	constructor(private eventDataService: EventDataService) {
		this.today = new Date();
		this.eventDataService.getEvents().subscribe((eventsData) => {
			eventsData.map((event) => this.events.push(event));
		});
	}
}
