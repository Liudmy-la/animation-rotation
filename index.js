const page = document.getElementById("page")
	page.style.width = '100vw'
	page.style.height = '100vh'
	page.style.backgroundColor = 'rgba(0, 0, 63, 0.2)'
	
const sunD = 50; 
const sun = document.getElementById("sun-its")
	sun.style.width = `${sunD}px`
	sun.style.height = `${sunD}px`
	sun.style.backgroundColor = 'orange'
	sun.style.borderRadius = '50%'
	
	sun.style.position = 'absolute'
	sun.style.top = `calc(50% - ${sunD / 2}px)`
	sun.style.left = `calc(50% - ${sunD / 2}px)`
	
const toNext = 80;
	
const mercuryTrD = sunD + toNext;
const mercuryTr = document.getElementById("mercury-tr");
	mercuryTr.style.width = `${mercuryTrD}px`
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

const Mercury = {
	element: mercury,
	diameter: mercuryD,
	trajectory: mercuryTrD,
	speed: 30
}
	
const venusTrD = sunD + toNext + toNext;
const venusTr = document.getElementById("venus-tr")
	venusTr.style.width = `${venusTrD}px`
	venusTr.style.height = `${venusTrD}px`
	venusTr.style.border = '1px solid yellow'
	venusTr.style.borderRadius = '50%'
	
	venusTr.style.position = 'absolute'
	venusTr.style.top = `calc(50% - ${venusTrD / 2}px)`
	venusTr.style.left = `calc(50% - ${venusTrD / 2}px)`
	
const venusD = 30;
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
	speed: 45
}

const earthTrD = sunD + toNext + toNext + toNext
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
	speed: 60
}


const SolarSystem = [
	Mercury,
	Venus,
	Earth
]

const rotation = (planet) => {
	let angleDeg = 0
	let timeSec = 1
	let interval = 5

	let gapChange = setInterval(() => {	
			angleDeg += planet.speed * timeSec * interval / 1000
			
			let shiftTop = (planet.trajectory / 2) * Math.cos(angleDeg * (Math.PI / 180))
			let shiftLeft = (planet.trajectory / 2) * Math.sin(angleDeg * (Math.PI / 180))
			
			planet.element.style.top = `calc(50% - ${shiftTop}px - ${planet.diameter}px / 2)`
			planet.element.style.left = `calc(50% - ${shiftLeft}px - ${planet.diameter}px  / 2)`
		}, timeSec * interval)

	setTimeout(() => clearInterval(gapChange), 90000);
}

for (let i = 0; i < SolarSystem.length; i++) {
	rotation(SolarSystem[i])
}
