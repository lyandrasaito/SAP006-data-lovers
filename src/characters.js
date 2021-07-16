import './data.js';
import data from './data/ghibli/ghibli.js';

const ghibliMovies = data.films;

function print(ghibliMovies) {

	for (let movie of ghibliMovies) {
		const people = movie.people;
		let card = ""
		for (let person of people) {
			card += `
			 <div class="card flexBox">
			 <div class="card-content">
				 <h3 class="card-title">${person.name}</h3>
				 <div class="card-body">
					 <h4>Gender: ${person.gender}</h4>
					 <h4>Age: ${person.age}</h4>
					 <h4>Hair Color: ${person.hair_color}</h4>
					 <h4>Eye Color: ${person.eye_color}</h4>
					 <h4>Specie: ${person.specie}</h4>
				 </div>
			 </div>
		 </div> 
			`
		}
		document.getElementById("characters").innerHTML = card;
		let index = 0;

		for (let card1 of document.getElementsByClassName("card")) {
			card1.style.backgroundImage = "url('" + people[index].img + "')";
			index++
		}
	}
}
print(ghibliMovies);