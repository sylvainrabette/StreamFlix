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
    let title = movie.title
    return path + title + '.png'
  }

}

let MoviesHelperObj = new MoviesHelper();

export default MoviesHelperObj