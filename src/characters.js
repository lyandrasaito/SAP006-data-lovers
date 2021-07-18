import './data.js';
import data from './data/ghibli/ghibli.js';
import { filteringGender, orderingCharacters } from './data.js';


//characters.forEach(film => film.people.forEach(property => console.log(property.name, property.specie, property.gender))); 

const movies = data.films;

/*  movies.map percorre todos os movies e movie => movie.people retorna o arranjo de personagens, 
	recebo arranjo contendo subarranjos com todos os personagens de cada filme
  flat junta esses arranjos internos num arranjo só para criar um novo array com os arranjos que preciso */

const characters = movies.map(movie => movie.people).flat();

const printCharacters = (characters) => {
	let card = "";
	for (let character of characters) {
		card += `
			<div class="card flexBox">
				<h3>${character.name}</h3>
				<img class="imgCard" src=${character.img}><br>
				<h4>Gender: ${character.gender}</h4>
                <h4>Age: ${character.age}</h4>
                <h4>Hair Color: ${character.hair_color}</h4>
                <h4>Eye Color: ${character.eye_color}</h4>
                <h4>Specie: ${character.specie}</h4>
			</div>
            `;
	}
	document.getElementById("characters").innerHTML = card;
}

printCharacters(characters); //print inicial

document.getElementById("order").addEventListener("change", (option) => {
	let opt = option.target.value;
	let order = orderingCharacters(characters, opt);
	printCharacters(order);
});

document.getElementById("filterGender").addEventListener("change", (option) => {
	let opt = option.target.value;
	let filter = filteringGender(characters, opt);
	printCharacters(filter);
});