import './data.js';
//import { alphabetic } from './data.js';

import data from './data/ghibli/ghibli.js';
const ghibliMovies = data.films;

function print(ghibliMovies) {
	let card = "";

	for (let property of ghibliMovies) {
		card += `
		<div class="card flexBox">
			<div class="card-content">
		
				<h3 class="card-title">${property.title}</h3>
		 
				<div class="card-body">
		
					<h4>Director: ${property.director}</h4>
					<h4>Producer: ${property.producer}</h4>
					<h4>Release Date: ${property.release_date}</h4>
					<h4>Score: ${property.rt_score}</h4>
		
				</div>
		
			</div>
		
		</div>
		`
	}
	document.getElementById("movies").innerHTML = card;

	let index = 0;

	for (let card1 of document.getElementsByClassName("card")) {

		card1.style.backgroundImage = "url('" + ghibliMovies[index].poster + "')";
		index++
	}

}

print(ghibliMovies);

/*
let test = ghibliMovies.sort(function alphabetic(a, b) {
	return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
});

document.getElementById("alf").addEventListener("click", function () {
	console.log(test)
});*/




