import './data.js';
import data from './data/ghibli/ghibli.js';
import { filteringGender, orderingCharacters } from './data.js';

const characters = data.films;

//characters.forEach(film => film.people.forEach(property => console.log(property.name, property.specie, property.gender))); 

function print(characters) {
	let card = "";
	for (let character of characters) {
		const people = character.people;
		for (let person of people) {
			card += `
			 <div class="card flexBox" style="background-image: url('${person.img}')">
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
	}
	document.getElementById("characters").innerHTML = card;
}
print(characters);

document.getElementById("order").addEventListener("change", (option) => {
	let opt = option.target.value;
	let order = orderingCharacters(characters, opt);
	print(order);
});

document.getElementById("filterGender").addEventListener("change", (option) => {
	let opt = option.target.value;
	let filter = filteringGender(characters, opt);
	print(filter);
});