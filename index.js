const $page = $('#page')
	$page.css({'width': '100vw', 
			'height': '100vh', 
			'background-color': 'rgba(0, 0, 63, 0.3)'
		})

//--------------------------------------------------------
	
const sunD = 200; 
const $sun = $('#sun')
	$sun.css({ 
			width: `${sunD}px`, 
			height: `${sunD}px`, 
			backgroundColor: 'orange',
			borderRadius: '50%',
			position: 'absolute',
			top: `calc(50% - ${sunD / 2}px)`,
			left: `calc(50% - ${sunD / 2}px)`
		})
	
const toNext = 200

const SolarSystem = []

//--------------------------------------------------------

class Celestials {
	constructor ({elementName, colour, diameter, speed, satelliteOf}) {
		this.$obj = $('<div></div>')
		this.$obj.attr('id', elementName.toLowerCase())
		this.$element = $('<div></div>')
		this.$element.attr('id', elementName.toLowerCase() + '-its')
		this.$way = $('<div></div>')
		this.$way.attr('id', elementName.toLowerCase() + '-tr')

		this.$obj.append(this.$element, this.$way)
			$page.append(this.$obj)

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
				this.$way.css({ 
							top: `calc(50% - (${this.trajectory}px) / 2)`,
							left: `calc(50% - (${this.trajectory}px) / 2)`
						})
			
				this.$element.css({ 
							top: `calc(50% - ${this.diameter / 2}px - ${this.trajectory / 2}px)`,
							left: `calc(50% - ${this.diameter / 2}px)`
						})
		}
		else {
			const parent = SolarSystem.find(
				(item) => item.$obj.is(`#${satelliteOf.elementName.toLowerCase()}`))

			this.id = parent.satellites.length + 1 
			this.trajectory = parent.diameter + 30 * (this.id + 1) * 1.5

			//----------------------

			this.parentTop = `calc(${parent.$element.css('top')} + (${parent.diameter}px) / 2)`
			this.parentLeft = `calc(${parent.$element.css('left')} + (${parent.diameter}px) / 2)`

			this.$way.css({ 
						top: `calc(${this.parentTop} - (${this.trajectory}px) / 2)`,
						left: `calc(${this.parentLeft} - (${this.trajectory}px) / 2)`
					})
			
			this.$element.css({ 
						top: `calc(${this.parentTop} - ${this.diameter / 2}px - ${this.trajectory / 2}px)`,
						left: `calc(${this.parentLeft} - ${this.diameter / 2}px)`
					})
		}

		//----------------------

			this.$way.css({ 
						width: `${this.trajectory}px`,
						height: `${this.trajectory}px`,
						border: `1px solid ${this.colour}`,
						borderRadius: '50%',
						position: 'absolute'
					})

			this.$element.css({ 
						width: `${this.diameter}px`,
						height: `${this.diameter}px`,
						backgroundColor: `${this.colour}`,
						borderRadius: '50%',
						position: 'absolute'
					})

	}

	static create (data) {		
		const newCelestial = new Celestials(data);

		if (data.satelliteOf) {		
			const parent = SolarSystem.find(
				(item) => item.$obj.is(`#${data.satelliteOf.elementName.toLowerCase()}`))
			
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
		elementName: 'mercury',
		colour: 'brown', 
		diameter: 20, 
		speed: 80
	})

const Venus = Celestials.create({elementName: 'venus', colour: 'yellow', diameter: 30, speed: 70})
const Earth = Celestials.create({elementName: 'earth', colour: 'green', diameter: 30, speed: 60})
const Mars = Celestials.create({elementName: 'mars', colour: 'red', diameter: 25, speed: 50})
const Jupiter = Celestials.create({elementName: 'jupiter', colour: 'purple', diameter: 60, speed: 40})
const Saturn = Celestials.create({elementName: 'saturn', colour: 'brown', diameter: 60, speed: 30})
const Uranus = Celestials.create({elementName: 'uranus', colour: 'blue', diameter: 45, speed: 20})
const Neptune = Celestials.create({elementName: 'neptune', colour: 'grey', diameter: 45, speed: 10})

	const Moon = Celestials.create({
			elementName: 'moon',
			colour: 'white', 
			diameter: 10, 
			speed: 120, 

			satelliteOf: {elementName: 'earth'}
		})
	
	const Moon002 = Celestials.create({elementName: 'moon002', colour: 'yellow', diameter: 10,  speed: 150, satelliteOf: {elementName: 'mars'}})

	const Moon003 = Celestials.create({elementName: 'moon003', colour: 'white', diameter: 20,  speed: 100, satelliteOf: {elementName: 'jupiter'}})
	const Moon004 = Celestials.create({elementName: 'moon004', colour: 'green', diameter: 15, speed: 150, satelliteOf: {elementName: 'jupiter'}})
	const Moon005 = Celestials.create({elementName: 'moon005', colour: 'pink', diameter: 25, speed: 200, satelliteOf: {elementName: 'jupiter'}})

	const Moon006 = Celestials.create({elementName: 'moon006', colour: 'white', diameter: 15, speed: 200, satelliteOf: {elementName: 'uranus'}})

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
			
				planet.$element.css({
								'top': `calc(50% - ${shiftTop}px - ${planet.diameter}px / 2)`,
								'left': `calc(50% - ${shiftLeft}px - ${planet.diameter}px  / 2)`
							})

			if (planet.satellites.length > 0) {
				let satellite

				for (let j = 0; j < planet.satellites.length; j++) {
					satellite = planet.satellites[j]
		
					let satAngleDeg = satellite.angleDeg + satellite.speed * interval / 1000
						satellite.angleDeg = satAngleDeg
					
					let shiftSatTop = (satellite.trajectory / 2) * Math.cos(satAngleDeg * (Math.PI / 180))
					let shiftSatLeft = (satellite.trajectory / 2) * Math.sin(satAngleDeg * (Math.PI / 180))
					
					satellite.$element.css({
									'top': `calc(${satellite.parentTop} - ${satellite.diameter}px / 2 - ${shiftTop}px - ${shiftSatTop}px + (${planet.trajectory}px / 2))`,
									'left':`calc(${satellite.parentLeft} - ${satellite.diameter}px / 2 - ${shiftLeft}px - ${shiftSatLeft}px )`
								})

					satellite.$way.css({
									'top': `calc(${satellite.parentTop} - ${satellite.trajectory}px / 2 - ${shiftTop}px + ${planet.trajectory}px / 2)`,
									'left': `calc(${satellite.parentLeft} - ${satellite.trajectory}px / 2 - ${shiftLeft}px )`
								})
				}
			}
		}
	}, interval)

	setTimeout(() => clearInterval(gapChange), 90000);
}

//--------------------------------------------------------

const $ufo = $('#ufo-its')
$ufo.css({
		display: 'none'
	})

const fly = () => {	
	$ufo.css({
		display: 'inherit'
	})
	
	let angle = 0;
	const perigee = 700;
	const apogee = 1250;
	const interval = 2

	let move = setInterval(() => {
		const x = perigee * Math.cos(angle * (Math.PI / 180));
		const y = apogee * Math.sin(angle * (Math.PI / 180));
			  
		$ufo.css({
			position: 'absolute',
			top: `calc(50% - ${y}px)`,
			left: `calc(35% - ${x}px)`,
			zIndex: '2'
		})
		angle += 1 * Math.random() ** 3;

	}, interval)

	setTimeout(() => {
		clearInterval(move)
		$ufo.css({
			display: 'none'
		})
	}, 85000);
}

//--------------------------------------------------------

const $fire = $('#fire')
$fire.css({
	display: 'none'
})

const shoot = () => {
	let planet
	let planetX
	let planetY
	let ufoX
	let ufoY

	let move = setInterval(() => {
		
		for (let i = 0; i < SolarSystem.length; i++) {
			planet = SolarSystem[i]

			const rectPlanet = planet.$element[0].getBoundingClientRect()	
				
			const rectUfo = $ufo[0].getBoundingClientRect()	
				ufoX = rectUfo.left + 150
				ufoY = rectUfo.top + 120

			let deltaX = rectPlanet.left - ufoX
			let deltaY = rectPlanet.top - ufoY
			let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

			if (distance < 200){
				$fire.css({
						position: 'absolute',
						top: `calc(${ufoY}px + ${deltaY * 0.5}px)`,
						left: `calc(${ufoX}px + ${deltaX * 0.5}px )`,
						display: 'inherit',
						zIndex: '3'
					})

				$fire.fadeOut(1000)
			}
		}

	}, 1)

	setTimeout(() => clearInterval(move), 80000);
}

setTimeout(() => {
	rotation(); 
  
	setTimeout(() => {
		fly()
  
		setTimeout(() => {
			shoot();
		}, 2000);
	}, 2000);
}, 10);