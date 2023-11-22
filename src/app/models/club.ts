export class Club {
	id: number;
	name: string;
	motto: string;
	mentor: string;
	email: string;
	president: string;
	vicePresident: string;
	generalSecretary: string;
	mainEvent: string;
	strength: number;
	level: string;

	constructor(
		id: number,
		name: string,
		motto: string,
		mentor: string,
		email: string,
		president: string,
		vicePresident: string,
		generalSecretary: string,
		mainEvent: string,
		strength: number,
		level: string
	) {
		this.id = id;
		this.name = name;
		this.motto = motto;
		this.mentor = mentor;
		this.email = email;
		this.president = president;
		this.vicePresident = vicePresident;
		this.generalSecretary = generalSecretary;
		this.mainEvent = mainEvent;
		this.strength = strength;
		this.level = level;
	}
}
