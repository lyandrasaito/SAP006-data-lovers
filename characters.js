import './data.js';
import data from './data/ghibli/ghibli.js';
import { filteringGender, ordering, filteringSpecies } from './data.js';

const movies = data.films;

const characters = movies.map(movie => movie.people).flat();

const printCharacters = (characters) => {
	let card = "";
	for (let character of characters) {
		card += `
			<div class="card flexBox">
				<h3>${character.name}</h3>
				<img class="imgCard" src=${character.img}>
				<h4>Gender: ${character.gender}</h4>
                <h4>Age: ${character.age}</h4>
                <h4>Hair Color: ${character.hair_color}</h4>
                <h4>Eye Color: ${character.eye_color}</h4>
                <h4>Specie: ${character.specie}</h4>
			</div>
            `
	}
	document.getElementById("characters").innerHTML = card;
}

printCharacters(characters);

document.getElementById("order").addEventListener("change", (option) => {
	let opt = option.target.value;
	let order = ordering(characters, opt);
	printCharacters(order);
});

document.getElementById("filterGender").addEventListener("change", (option) => {
	let opt = option.target.value;
	let filter = filteringGender(characters, opt);
	printCharacters(filter);
});

document.getElementById("filterSpecie").addEventListener("change", (option) => {
	let opt = option.target.value;
	let species = filteringSpecies(characters, opt);
	printCharacters(species);
});