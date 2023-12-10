import { TestBed } from '@angular/core/testing';

import { ClubDataService } from './club-data.service';

describe('ClubDataService', () => {
	let service: ClubDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ClubDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
