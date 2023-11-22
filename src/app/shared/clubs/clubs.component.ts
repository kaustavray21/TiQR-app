import { Component } from '@angular/core';
import { Club } from 'src/app/models/club';

@Component({
	selector: 'app-clubs',
	templateUrl: './clubs.component.html',
	styleUrls: ['./clubs.component.scss'],
})
export class ClubsComponent {
	clubs: Club[] = [];
}
