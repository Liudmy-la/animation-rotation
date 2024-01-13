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
const SolarSystem = []

//--------------------------------------------------------

const newPlanet = ( elemId, trajId, elemColour, elemD, elemSp ) => {
	const id = SolarSystem.length + 1
	const trajD = sunD + toNext * (id + 1)

	const trajectory = document.getElementById(trajId)
	console.log(trajId, trajectory)
		trajectory.style.width = `${trajD}px`
		trajectory.style.height = `${trajD}px`
		trajectory.style.border = `1px solid ${elemColour}`
		trajectory.style.borderRadius = '50%'

		trajectory.style.position = 'absolute'
		trajectory.style.top = `calc(50% - ${trajD / 2}px)`
		trajectory.style.left = `calc(50% - ${trajD / 2}px)`

	const element = document.getElementById(elemId)	
		element.style.width = `${elemD}px`
		element.style.height = `${elemD}px`
		element.style.backgroundColor = elemColour
		element.style.borderRadius = '50%'

		element.style.position = 'absolute'
		element.style.top = `calc(50% - ${elemD / 2}px - ${trajD / 2}px)`
		element.style.left = `calc(50% - ${elemD / 2}px)`
	
		return {
				elemId: id,
				element: element,
				colour: elemColour,
				diameter: elemD,
				trajectory: trajD,
				speed: elemSp,
				angleDeg: 0
				}
	}

//--------------------------------------------------------

const Mercury = newPlanet(
	elementId = 'mercury-its', 
	trajId = 'mercury-tr', 
	colour = 'brown', 
	diameter = 20, 
	speed = 80
)
SolarSystem.push(Mercury)

const Venus = newPlanet(elementId = 'venus-its', trajId = 'venus-tr', colour = 'yellow', diameter = 30, speed = 70)
SolarSystem.push(Venus)

const Earth = newPlanet(elementId = 'earth-its', trajId = 'earth-tr', colour = 'green', diameter = 30, speed = 60)
SolarSystem.push(Earth)

const Mars = newPlanet(elementId = 'mars-its', trajId = 'mars-tr', colour = 'red', diameter = 25, speed = 50)
SolarSystem.push(Mars)

const Jupiter = newPlanet(elementId = 'jupiter-its', trajId = 'jupiter-tr', colour = 'purple', diameter = 60, speed = 40)
SolarSystem.push(Jupiter)

const Saturn = newPlanet(elementId = 'saturn-its', trajId = 'saturn-tr', colour = 'brown', diameter = 60, speed = 30)
SolarSystem.push(Saturn)

const Uranus = newPlanet(elementId = 'uranus-its', trajId = 'uranus-tr', colour = 'blue', diameter = 45, speed = 20)
SolarSystem.push(Uranus)

const Neptune = newPlanet(elementId = 'neptune-its', trajId = 'neptune-tr', colour = 'grey', diameter = 45, speed = 10)
SolarSystem.push(Neptune)

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