const numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB  = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt('Last Film', '');
      b = prompt('dsdsd', '');
      d = prompt('Last Film', '');
      c = prompt('dsdsd', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);