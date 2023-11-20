import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EventDataService {
	constructor(private httpClient: HttpClient) {}

	getEvents(): Observable<Event[]> {
		return this.httpClient.get<Event[]>('http://localhost:3000/events');
	}
}
