import data from './data/ghibli/ghibli.js'
const films = data.films;

export const ordering = (element, option) => {
    if (option === "A-Z") {
        return element.sort((a, b) => a.title > b.title ? 1 : -1);
    } else if (option === "Z-A") {
        return element.sort((a, b) => a.title > b.title ? -1 : -1);
    } else if (option === "older") {
        return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? 1 : -1);
    } else if (option === "newer") {
        return element.sort((a, b) => parseInt(a.release_date) > parseInt(b.release_date) ? -1 : 1);
    } else if (option === "low") {
        return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? 1 : -1);
    } else if (option === "high") {
        return element.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1);
    }
}
