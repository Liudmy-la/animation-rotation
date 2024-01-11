const page = document.getElementById("page")
	page.style.width = '100vw'
	page.style.height = '100vh'
	page.style.backgroundColor = 'rgba(0, 0, 63, 0.2)'

//--------------------------------------------------------
	
const sunD = 50; 
const sun = document.getElementById("sun-its")
	sun.style.width = `${sunD}px`
	sun.style.height = `${sunD}px`
	sun.style.backgroundColor = 'orange'
	sun.style.borderRadius = '50%'
	
	sun.style.position = 'absolute'
	sun.style.top = `calc(50% - ${sunD / 2}px)`
	sun.style.left = `calc(50% - ${sunD / 2}px)`
	
const toNext = 100

//--------------------------------------------------------

const SolarSystem = []

class Celestials {
	constructor ({elementId, trajId, colour, diameter, speed}) {
		this.id = SolarSystem.length + 1 

		this.element = document.getElementById(elementId)
		this.way = document.getElementById(trajId)
		this.colour = colour
		this.diameter = diameter
		this.speed = speed
		this.angleDeg = 0

		this.trajectory = sunD + toNext * (this.id + 1)
	}

	static create (data) {		
		const newCelestial = new Celestials(data);
		SolarSystem.push(newCelestial);
		return newCelestial;
	}

	setTrajStyle () {
		this.way.style.width = `${this.trajectory}px`;
		this.way.style.height = `${this.trajectory}px`;
		this.way.style.border = `1px solid ${this.colour}`;
		this.way.style.borderRadius = '50%';

		this.way.style.position = 'absolute';
		this.way.style.top = `calc(50% - (${this.trajectory}px) / 2)`;
		this.way.style.left = `calc(50% - (${this.trajectory}px) / 2)`;
}

	setPlanetStyle () {
		this.element.style.width = `${this.diameter}px`;
		this.element.style.height = `${this.diameter}px`;
		this.element.style.backgroundColor = `${this.colour}`;
		this.element.style.borderRadius = '50%';

		this.element.style.position = 'absolute';
		this.element.style.top = `calc(50% - ${this.diameter / 2}px - ${this.trajectory / 2}px)`;
		this.element.style.left = `calc(50% - ${this.diameter / 2}px)`;
	}
}

//--------------------------------------------------------

const Mercury = Celestials.create({elementId: 'mercury-its', trajId: 'mercury-tr', colour: 'brown', diameter: 20, speed: 80})
	Mercury.setTrajStyle();
	Mercury.setPlanetStyle();

//--------------------------------------------------------

const Venus = Celestials.create({elementId: 'venus-its', trajId: 'venus-tr', colour: 'yellow', diameter: 30, speed: 70})
	Venus.setTrajStyle();
	Venus.setPlanetStyle();

//--------------------------------------------------------

const Earth = Celestials.create({elementId: 'earth-its', trajId: 'earth-tr', colour: 'green', diameter: 30, speed: 60})
	Earth.setTrajStyle();
	Earth.setPlanetStyle();

//--------------------------------------------------------

const Mars = Celestials.create({elementId: 'mars-its', trajId: 'mars-tr', colour: 'red', diameter: 25, speed: 50})
	Mars.setTrajStyle();
	Mars.setPlanetStyle();

//--------------------------------------------------------

const Jupiter = Celestials.create({elementId: 'jupiter-its', trajId: 'jupiter-tr', colour: 'purple', diameter: 60, speed: 40})
	Jupiter.setTrajStyle();
	Jupiter.setPlanetStyle();

//--------------------------------------------------------

const Saturn = Celestials.create({elementId: 'saturn-its', trajId: 'saturn-tr', colour: 'brown', diameter: 60, speed: 30})
	Saturn.setTrajStyle();
	Saturn.setPlanetStyle();

//--------------------------------------------------------

const Uranus = Celestials.create({elementId: 'uranus-its', trajId: 'uranus-tr', colour: 'blue', diameter: 45, speed: 20})
	Uranus.setTrajStyle();
	Uranus.setPlanetStyle();

//--------------------------------------------------------

const Neptune = Celestials.create({elementId: 'neptune-its', trajId: 'neptune-tr', colour: 'grey', diameter: 45, speed: 10})
	Neptune.setTrajStyle();
	Neptune.setPlanetStyle();

//--------------------------------------------------------


const rotation = () => {
	const interval = 5

	let gapChange = setInterval(() => {	
		let planet

		for (let i = 0; i < SolarSystem.length; i++) {
			planet = SolarSystem[i]

			let newAngleDeg = planet.angleDeg + planet.speed * interval / 1000
			planet.angleDeg = newAngleDeg
			
			let shiftTop = (planet.trajectory / 2) * Math.cos(newAngleDeg * (Math.PI / 180))
			let shiftLeft = (planet.trajectory / 2) * Math.sin(newAngleDeg * (Math.PI / 180))
			
			planet.element.style.top = `calc(50% - ${shiftTop}px - ${planet.diameter}px / 2)`
			planet.element.style.left = `calc(50% - ${shiftLeft}px - ${planet.diameter}px  / 2)`
		}
	}, interval)

	setTimeout(() => clearInterval(gapChange), 90000);
}

rotation()