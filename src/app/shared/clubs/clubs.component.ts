import { Component } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubDataService } from 'src/app/services/club-data.service';

@Component({
	selector: 'app-clubs',
	templateUrl: './clubs.component.html',
	styleUrls: ['./clubs.component.scss'],
})
export class ClubsComponent {
	clubs: Club[] = [];

	constructor(private clubDataService: ClubDataService) {
		this.clubDataService.getClubs().subscribe((clubsData) => {
			clubsData.map((club) => this.clubs.push(club));
		});
	}
}
