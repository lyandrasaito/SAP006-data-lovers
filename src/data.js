import data from './data/ghibli/ghibli.js'
const films = data.films;

export const ordering = (element, option) => {
    if (option === "A-Z") {
        return element.sort((a, b) => a.title > b.title ? 1 : -1);
    } else if (option === "Z-A") {
        return element.sort((a, b) => a.title > b.title ? -1 : -1);
    } else if (option === "Release") {
        return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? 1 : -1);
    } else if (option === "novo") {
        return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? -1 : 1);
    } else if (option === "Rate") {
        return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? 1 : -1);
    } else if (option === "bom") {
        return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1);
    }
}
