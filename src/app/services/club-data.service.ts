import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from 'src/app/models/club';
@Injectable({
	providedIn: 'root',
})
export class ClubDataService {
	constructor(private httpClient: HttpClient) {}

	getClubs(): Observable<Club[]> {
		return this.httpClient.get<Club[]>('http://localhost:3000/clubs');
	}
}
