export default class ConClass {

	constructor(name, number) {
	    this.name = name;
	    this.number = number;
	    this.id = Math.floor(Math.random()*90000) + 10000;
	}
}

