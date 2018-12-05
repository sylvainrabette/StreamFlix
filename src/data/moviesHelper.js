import Movies from './movies.json'
import Constants from './constants'

class MoviesHelper {

  filter (args) {
    return this.getMovies().filter((movie) => {

      if (args.category && args.category !== Constants.Category.All && args.category !== movie.category) {
        return false
      }

      if (Object.hasOwnProperty.call(args, 'text')) {
        if (movie.title.toLowerCase().indexOf(args.text.toLowerCase()) !== -1) {
          return true
        }
      }

      return false
    })
  }
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