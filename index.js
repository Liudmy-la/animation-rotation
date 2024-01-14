const page = document.getElementById("page")
	page.style.width = '100vw'
	page.style.height = '100vh'
	page.style.backgroundColor = 'rgba(0, 0, 63, 0.3)'

//--------------------------------------------------------
	
const sunD = 150; 
const sun = document.getElementById("sun-its")
	sun.style.width = `${sunD}px`
	sun.style.height = `${sunD}px`
	sun.style.backgroundColor = 'orange'
	sun.style.borderRadius = '50%'
	
	sun.style.position = 'absolute'
	sun.style.top = `calc(50% - ${sunD / 2}px)`
	sun.style.left = `calc(50% - ${sunD / 2}px)`
	
const toNext = 150

const SolarSystem = []

//--------------------------------------------------------

class Celestials {
	constructor ({elementId, trajId, colour, diameter, speed, satelliteOf}) {
		this.element = document.getElementById(elementId)
		this.way = document.getElementById(trajId)
		this.colour = colour
		this.diameter = diameter
		this.speed = speed
		this.angleDeg = 0
		
		this.satelliteOf = satelliteOf
		this.satellites = []

		if (!satelliteOf) {
			this.id = SolarSystem.length + 1 
			this.trajectory = sunD + toNext * (this.id + 1) * 1.5

			//----------------------
				this.way.style.top = `calc(50% - (${this.trajectory}px) / 2)`;
				this.way.style.left = `calc(50% - (${this.trajectory}px) / 2)`;
			
				this.element.style.top = `calc(50% - ${this.diameter / 2}px - ${this.trajectory / 2}px)`;
				this.element.style.left = `calc(50% - ${this.diameter / 2}px)`;
		}
		else {
			const parent = SolarSystem.find(
				(item) => item.element === document.getElementById(satelliteOf.elementId))
			
			this.id = parent.satellites.length + 1 
			this.trajectory = parent.diameter + 20 * (this.id + 1) 

			//----------------------

			this.parentTop = `calc(${parent.element.style.top} + (${parent.diameter}px) / 2)`
			this.parentLeft = `calc(${parent.element.style.left} + (${parent.diameter}px) / 2)`

				this.way.style.top = `calc(${this.parentTop} - (${this.trajectory}px) / 2)`;
				this.way.style.left = `calc(${this.parentLeft} - (${this.trajectory}px) / 2)`;
			
				this.element.style.top = `calc(${this.parentTop} - ${this.diameter / 2}px - ${this.trajectory / 2}px)`;
				this.element.style.left = `calc(${this.parentLeft} - ${this.diameter / 2}px)`;
		}

		//----------------------

			this.way.style.width = `${this.trajectory}px`;
			this.way.style.height = `${this.trajectory}px`;
			this.way.style.border = `1px solid ${this.colour}`;
			this.way.style.borderRadius = '50%';
			this.way.style.position = 'absolute';

			this.element.style.width = `${this.diameter}px`;
			this.element.style.height = `${this.diameter}px`;
			this.element.style.backgroundColor = `${this.colour}`;
			this.element.style.borderRadius = '50%';
			this.element.style.position = 'absolute';

	}

	static create (data) {		
		const newCelestial = new Celestials(data);

		if (data.satelliteOf) {		
			const parent = SolarSystem.find(
				(item) => item.element === document.getElementById(data.satelliteOf.elementId))
			
			parent.satellites.push(newCelestial);
		}
		else {
			SolarSystem.push(newCelestial);
		}
		return newCelestial;
	}
}

//--------------------------------------------------------

const Mercury = Celestials.create({
		elementId: 'mercury-its', 
		trajId: 'mercury-tr', 
		colour: 'brown', 
		diameter: 20, 
		speed: 80
	})

const Venus = Celestials.create({elementId: 'venus-its', trajId: 'venus-tr', colour: 'yellow', diameter: 30, speed: 70})
const Earth = Celestials.create({elementId: 'earth-its', trajId: 'earth-tr', colour: 'green', diameter: 30, speed: 60})
const Mars = Celestials.create({elementId: 'mars-its', trajId: 'mars-tr', colour: 'red', diameter: 25, speed: 50})
const Jupiter = Celestials.create({elementId: 'jupiter-its', trajId: 'jupiter-tr', colour: 'purple', diameter: 60, speed: 40})
const Saturn = Celestials.create({elementId: 'saturn-its', trajId: 'saturn-tr', colour: 'brown', diameter: 60, speed: 30})
const Uranus = Celestials.create({elementId: 'uranus-its', trajId: 'uranus-tr', colour: 'blue', diameter: 45, speed: 20})
const Neptune = Celestials.create({elementId: 'neptune-its', trajId: 'neptune-tr', colour: 'grey', diameter: 45, speed: 10})

	const Moon = Celestials.create({
			elementId: 'moon-its', 
			trajId: 'moon-tr', 
			colour: 'white', 
			diameter: 10, 
			speed: 120, 

			satelliteOf: {elementId: 'earth-its'}
		})

	const Moon001 = Celestials.create({elementId: 'moon001-its', trajId: 'moon001-tr', colour: 'white', diameter: 20,  speed: 120, satelliteOf: {elementId: 'jupiter-its'}})
	const Moon002 = Celestials.create({elementId: 'moon002-its', trajId: 'moon002-tr', colour: 'pink', diameter: 15, speed: 150, satelliteOf: {elementId: 'jupiter-its'}})

	const Moon003 = Celestials.create({elementId: 'moon003-its', trajId: 'moon003-tr', colour: 'white', diameter: 15, speed: 200, satelliteOf: {elementId: 'uranus-its'}})

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

			if (planet.satellites.length > 0) {
				let satellite

				for (let j = 0; j < planet.satellites.length; j++) {
					satellite = planet.satellites[j]
		
					let satAngleDeg = satellite.angleDeg + satellite.speed * interval / 1000
						satellite.angleDeg = satAngleDeg
					
					let shiftSatTop = (satellite.trajectory / 2) * Math.cos(satAngleDeg * (Math.PI / 180))
					let shiftSatLeft = (satellite.trajectory / 2) * Math.sin(satAngleDeg * (Math.PI / 180))
					
						satellite.element.style.top = `calc(${satellite.parentTop} - ${satellite.diameter}px / 2 - ${shiftTop}px - ${shiftSatTop}px + (${planet.trajectory}px / 2))`
						satellite.element.style.left = `calc(${satellite.parentLeft} - ${satellite.diameter}px / 2 - ${shiftLeft}px - ${shiftSatLeft}px )`
						
						satellite.way.style.top = `calc(${satellite.parentTop} - ${satellite.trajectory}px / 2 - ${shiftTop}px + ${planet.trajectory}px / 2)`
						satellite.way.style.left = `calc(${satellite.parentLeft} - ${satellite.trajectory}px / 2 - ${shiftLeft}px )`
				
				}
			}
		}
	}, interval)

	setTimeout(() => clearInterval(gapChange), 90000);
}

rotation()