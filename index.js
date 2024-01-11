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
	constructor (element, colour, diameter, speed) {
		this.id = SolarSystem.length + 1

		this.element = element
		this.colour = colour
		this.diameter = diameter
		this.speed = speed
		this.angleDeg = 0

		this.trajectory = sunD + toNext * (Celestials.id + 1)
	}

	static create (data) {		
		const newCelestial = new Celestials(data);
		SolarSystem.push(newCelestial);
		return newCelestial;
	}
}



// const jupiterTr = document.getElementById("jupiter-tr")
// jupiterTr.style = {
//     width: "100px", 
//     height: "100px", 
//     border: "1px solid purple",
//     borderRadius: "50%",
//     position: "absolute",
//     top: "calc(50% - 50px)", 
//     left: "calc(50% - 50px)" 
// }

//--------------------------------------------------------


const Mercury = Celestials.create(mercury, red, 20, 40)
	
const mercuryTr = document.getElementById("mercury-tr");
	mercuryTr.style.width = `${Mercury.trajectory}px`

	
	mercuryTr.style.height = `${mercuryTrD}px`
	mercuryTr.style.border = '1px solid red';
	mercuryTr.style.borderRadius = '50%';

	mercuryTr.style.position = 'absolute';	
	mercuryTr.style.top = `calc(50% - (${mercuryTrD}px) / 2)`;
	mercuryTr.style.left = `calc(50% - (${mercuryTrD}px) / 2)`;

const mercuryD = 20;
const mercury = document.getElementById("mercury-its")
	mercury.style.width = `${mercuryD}px`
	mercury.style.height = `${mercuryD}px`
	mercury.style.backgroundColor = 'red'
	mercury.style.borderRadius = '50%'
	
	mercury.style.position = 'absolute'
	mercury.style.top = `calc(50% - ${mercuryD / 2}px - ${mercuryTrD / 2}px)`
	mercury.style.left = `calc(50% - ${mercuryD / 2}px)`

// const Mercury = {
// 	element: mercury,
// 	diameter: mercuryD,
// 	trajectory: mercuryTrD,
// 	angleDeg: 0,
// 	speed: 80
// }

//--------------------------------------------------------
	
const venusTrD = sunD + toNext * 3;
const venusTr = document.getElementById("venus-tr")
	venusTr.style.width = `${venusTrD}px`
	venusTr.style.height = `${venusTrD}px`
	venusTr.style.border = '1px solid yellow'
	venusTr.style.borderRadius = '50%'
	
	venusTr.style.position = 'absolute'
	venusTr.style.top = `calc(50% - ${venusTrD / 2}px)`
	venusTr.style.left = `calc(50% - ${venusTrD / 2}px)`
	
const venusD = 25;
const venus = document.getElementById("venus-its")
	venus.style.width = `${venusD}px`
	venus.style.height = `${venusD}px`
	venus.style.backgroundColor = 'yellow'
	venus.style.borderRadius = '50%'
	
	venus.style.position = 'absolute'
	venus.style.top = `calc(50% - ${venusD / 2}px - ${venusTrD / 2}px)`
	venus.style.left = `calc(50% - ${venusD / 2}px)`
	
const Venus = {
	element: venus,
	diameter: venusD,
	trajectory: venusTrD,
	angleDeg: 0,
	speed: 70
}

//--------------------------------------------------------

const earthTrD = sunD + toNext * 4
const earthTr = document.getElementById("earth-tr")
	earthTr.style.width = `${earthTrD}px`
	earthTr.style.height = `${earthTrD}px`
	earthTr.style.border = '1px solid green'
	earthTr.style.borderRadius = '50%'
	
	earthTr.style.position = 'absolute'
	earthTr.style.top = `calc(50% - ${earthTrD / 2}px)`
	earthTr.style.left = `calc(50% - ${earthTrD / 2}px)`
	
const earthD = 30;
const earth = document.getElementById("earth-its")
	earth.style.width = `${earthD}px`
	earth.style.height = `${earthD}px`
	earth.style.backgroundColor = 'green'
	earth.style.borderRadius = '50%'
	
	earth.style.position = 'absolute'
	earth.style.top = `calc(50% - ${earthD / 2}px - ${earthTrD / 2}px)`
	earth.style.left = `calc(50% - ${earthD / 2}px)`
	
const Earth = {
	element: earth,
	diameter: earthD,
	trajectory: earthTrD,
	angleDeg: 0,
	speed: 60
}

//--------------------------------------------------------

const marsTrD = sunD + toNext * 5
const marsTr = document.getElementById("mars-tr")
	marsTr.style.width = `${marsTrD}px`
	marsTr.style.height = `${marsTrD}px`
	marsTr.style.border = '1px solid brown'
	marsTr.style.borderRadius = '50%'
	
	marsTr.style.position = 'absolute'
	marsTr.style.top = `calc(50% - ${marsTrD / 2}px)`
	marsTr.style.left = `calc(50% - ${marsTrD / 2}px)`
	
const marsD = 35;
const mars = document.getElementById("mars-its")
	mars.style.width = `${marsD}px`
	mars.style.height = `${marsD}px`
	mars.style.backgroundColor = 'brown'
	mars.style.borderRadius = '50%'
	
	mars.style.position = 'absolute'
	mars.style.top = `calc(50% - ${marsD / 2}px - ${marsTrD / 2}px)`
	mars.style.left = `calc(50% - ${marsD / 2}px)`
	
const Mars = {
	element: mars,
	diameter: marsD,
	trajectory: marsTrD,
	angleDeg: 0,
	speed: 50
}

//--------------------------------------------------------

const jupiterTrD = sunD + toNext * 6
const jupiterTr = document.getElementById("jupiter-tr")
	jupiterTr.style.width = `${jupiterTrD}px`
	jupiterTr.style.height = `${jupiterTrD}px`
	jupiterTr.style.border = '1px solid purple'
	jupiterTr.style.borderRadius = '50%'
	
	jupiterTr.style.position = 'absolute'
	jupiterTr.style.top = `calc(50% - ${jupiterTrD / 2}px)`
	jupiterTr.style.left = `calc(50% - ${jupiterTrD / 2}px)`
	
const jupiterD = 60;
const jupiter = document.getElementById("jupiter-its")
	jupiter.style.width = `${jupiterD}px`
	jupiter.style.height = `${jupiterD}px`
	jupiter.style.backgroundColor = 'purple'
	jupiter.style.borderRadius = '50%'
	
	jupiter.style.position = 'absolute'
	jupiter.style.top = `calc(50% - ${jupiterD / 2}px - ${jupiterTrD / 2}px)`
	jupiter.style.left = `calc(50% - ${jupiterD / 2}px)`
	
const Jupiter = {
	element: jupiter,
	diameter: jupiterD,
	trajectory: jupiterTrD,
	angleDeg: 0,
	speed: 40
}

//--------------------------------------------------------


// const SolarSystem = [
// 	Mercury,
// 	Venus,
// 	Earth,
// 	Mars,
// 	Jupiter
// ]

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