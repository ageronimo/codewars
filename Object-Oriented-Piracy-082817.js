class Ship{
	constructor(draft, crew){
		this.draft = draft; 
		this.crew = crew;
	}

	get isWorthIt() {
		return this.draft - (this.crew * 1.5) > 20 ? true:false;
	}
}

let titanic = new Ship(15, 10);

console.log(titanic.isWorthIt);