export class Event {
	id: number;
	eventName: string;
	eventDate: Date;
	location: string;
	attendees: number;
	eventType: string;
	organizer: string;

	constructor(
		id: number,
		eventName: string,
		eventDate: Date,
		location: string,
		attendees: number,
		eventType: string,
		organizer: string
	) {
		this.id = id;
		this.eventName = eventName;
		this.eventDate = eventDate;
		this.location = location;
		this.attendees = attendees;
		this.eventType = eventType;
		this.organizer = organizer;
	}
}
