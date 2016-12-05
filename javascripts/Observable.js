export default class Observable {
	constructor() {this.observers = [];}
	
	attach(observer) {
		this.observers.push(observer);
	}
	
	detach(observer) {
		const index = this.observers.indexOf(observer);
		this.observers.splice(index, 1);
	}
	
	notify() {
		this.observers.forEach((o) => o.update());
	}
}