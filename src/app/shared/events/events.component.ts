import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
	events: Number[] = [1, 2, 3, 4, 5];

	today: Date;

	constructor() {
		this.today = new Date();
	}
}
