import { ordering, filteringGender, filteringSpecies, filteringProducer, filteringDirector, moviesAverage } from '../src/data.js';

const movies = [
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" },
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" }];

const moviesAZ = [
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" },
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" },
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }];

const moviesZA = [
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" },
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" }];

const moviesOlderToNewer = [
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" },
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" },
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }];

const moviesNewerToOlder = [
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" },
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" }];

const lowToHighMovies = [
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" },
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" }];

const highToLowMovies = [
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" },
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" },
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }];

const InternalChronology = [
  { "title": "My Neighbor Totoro", "release_date": "1988", "rt_score": "93", "chronological_position": "3", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" },
  { "title": "Grave of the Fireflies", "release_date": "1988", "rt_score": "97", "chronological_position": "4", "director": "Isao Takahata", "producer": "Toru Hara" },
  { "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95", "chronological_position": "6", "director": "Hayao Miyazaki", "producer": "Isao Takahata" },
  { "title": "Kiki's Delivery Service", "release_date": "1989", "rt_score": "96", "chronological_position": "7", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki" }];

const characters = [
  { "name": "Ursula", "gender": "Female", "specie": "Human" },
  { "name": "Tombo", "gender": "Male", "specie": "Human" },
  { "name": "Osono", "gender": "Female", "specie": "Human" },
  { "name": "Fukuo", "gender": "Male", "specie": "Human" },
  { "name": "Baron Humbert von Gikkingen", "gender": "Male", "specie": "Cat" }];

const charactersAZ = [
  { "name": "Baron Humbert von Gikkingen", "gender": "Male", "specie": "Cat" },
  { "name": "Fukuo", "gender": "Male", "specie": "Human" },
  { "name": "Osono", "gender": "Female", "specie": "Human" },
  { "name": "Tombo", "gender": "Male", "specie": "Human" },
  { "name": "Ursula", "gender": "Female", "specie": "Human" }];

const charactersZA = [
  { "name": "Ursula", "gender": "Female", "specie": "Human" },
  { "name": "Tombo", "gender": "Male", "specie": "Human" },
  { "name": "Osono", "gender": "Female", "specie": "Human" },
  { "name": "Fukuo", "gender": "Male", "specie": "Human" },
  { "name": "Baron Humbert von Gikkingen", "gender": "Male", "specie": "Cat" }];


describe('testing "ordering" function', () => {
  it('its a function', () => {
    expect(typeof ordering).toBe('function');
  });

  it('ordering `A-Z` movies', () => {
    expect(ordering(movies, "azMovies")).toEqual(moviesAZ);
  });

  it('ordering `Z-A` movies', () => {
    expect(ordering(movies, "zaMovies")).toEqual(moviesZA);
  });

  it('ordering older to newer movies', () => {
    expect(ordering(movies, "older")).toEqual(moviesOlderToNewer);
  });

  it('ordering newer to older movies', () => {
    expect(ordering(movies, "newer")).toEqual(moviesNewerToOlder);
  });

  it('ordering low to high movies', () => {
    expect(ordering(movies, "low")).toEqual(lowToHighMovies);
  });

  it('ordering high to low movies', () => {
    expect(ordering(movies, "high")).toEqual(highToLowMovies);
  });

  it('ordering movies by internal chronology', () => {
    expect(ordering(movies, "internal")).toEqual(InternalChronology);
  });

  it('ordering `A-Z` characters', () => {
    expect(ordering(characters, "azCharacters")).toEqual(charactersAZ);
  });

  it('ordering `Z-A` characters', () => {
    expect(ordering(characters, "zaCharacters")).toEqual(charactersZA);
  });
});

describe('testing "filteringDirector" function', () => {
  it('its a function', () => {
    expect(typeof filteringDirector).toBe('function');
  });

  it('should filter by director', () => {
    expect(filteringDirector(movies, "Isao Takahata")).toEqual([movies[3]]);
  });

});

describe('testing "filteringProducer" function', () => {
  it('its a function', () => {
    expect(typeof filteringProducer).toBe('function');
  });

  it('should filter by producer', () => {
    expect(filteringProducer(movies, "Toru Hara")).toEqual([movies[3]]);
  });

});

describe('testing "filteringGender" function', () => {
  it('its a function', () => {
    expect(typeof filteringGender).toBe('function');
  });

  it('should filter by gender', () => {
    expect(filteringGender(characters, "female")).toEqual([characters[0], characters[2]]);
  });

});

describe('testing "filteringSpecies" function', () => {
  it('its a function', () => {
    expect(typeof filteringSpecies).toBe('function');
  });

  it('should filter by specie', () => {
    expect(filteringSpecies(characters, "cat")).toEqual([characters[4]]);
  });

});

describe('testing "moviesAverage" function', () => {
  it('its a function', () => {
    expect(typeof moviesAverage).toBe('function');
  });

  it('should return 95.25', () => {
    expect(moviesAverage(movies, "rt_score")).toEqual(95.25);
  });

});