export const ordering = (arr, option) => {
    const element = [...arr];
    if (option === "azMovies") {
        return element.sort((a, b) => a.title > b.title ? 1 : -1);
    } else if (option === "zaMovies") {
        return element.sort((a, b) => a.title > b.title ? -1 : 1);
    } else if (option === "older") {
        return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? 1 : -1);
    } else if (option === "newer") {
        return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? -1 : 1);
    } else if (option === "low") {
        return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? 1 : -1);
    } else if (option === "high") {
        return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1);
    } else if (option === "internal") {
        return element.sort((a, b) => parseInt(a.chronological_position) > parseInt(b.chronological_position) ? 1 : -1);
    } else if (option === "azCharacters") {
        return element.sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (option === "zaCharacters") {
        return element.sort((a, b) => a.name > b.name ? -1 : 1);
    }
}

export const filteringDirector = (element, option) => element.filter((e) => e.director === option);

export const filteringProducer = (element, option) => element.filter((e) => e.producer === option);

export const filteringGender = (element, option) => element.filter((e) => e.gender.toLowerCase() === option);

export const filteringSpecies = (element, option) => element.filter((e) => e.specie.toLowerCase() === option);

export const moviesAverage = (movies) => movies.reduce((acc, movie) => acc + parseInt(movie["rt_score"]), 0) / movies.length;