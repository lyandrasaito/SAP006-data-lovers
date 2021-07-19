import './data.js';
import { ordering } from './data.js';
import { filteringDirector } from './data.js';
import { filteringProducer } from './data.js';


import data from './data/ghibli/ghibli.js';
const ghibliMovies = data.films;

function print(ghibliMovies) {
	let card = "";

	for (let property of ghibliMovies) {
		card += `
			<div class="card flexBox">
				<h3>${property.title}</h3>
				<img class="imgCard" src=${property.poster}>
				<h4>Director: ${property.director}</h4>
				<h4>Producer: ${property.producer}</h4>
				<h4>Release Date: ${property.release_date}</h4>
				<h4>Score: ${property.rt_score}</h4>
			</div>
		`
	}
	document.getElementById("movies").innerHTML = card;

}
print(ghibliMovies);

document.getElementById("order").addEventListener("change", (option) => {
	let opt = option.target.value;
	let order = ordering(ghibliMovies, opt);
	print(order);
});

document.getElementById("filterDirector").addEventListener("change", (option) => {
	let opt = option.target.value;
	let filter = filteringDirector(ghibliMovies, opt);
	print(filter);
});

document.getElementById("filterProducer").addEventListener("change", (option) => {
	let opt = option.target.value;
	let filter = filteringProducer(ghibliMovies, opt);
	print(filter);
});