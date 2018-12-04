import Movies from './movies.json'

class MoviesHelper {

  getMovies() {
    return Movies
  }

  getMoviesTitles() {
    return Movies.map(movies => movies.title)
  }

  getMovieImage(movie) {
    let path = 'src/assets/images/'
    let id = movie.id
    return path + id + '.png'
  }

}

let MoviesHelperObj = new MoviesHelper();

export default MoviesHelperObj