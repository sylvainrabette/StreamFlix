import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/MediaQueries.css'
import MoviesHelper from '../data/moviesHelper'

import Header from './Header'
import MovieTile from './MovieTile';

class App extends Component {
  constructor () {
    super(...arguments)
  } 

  render() {
    return (
      <div className="App">
        <Header />
        <div className="movie-list">
          {this.generateMovieTiles()}
        </div>
      </div>
    )
  }

  generateMovieTiles() {
    return MoviesHelper.getMovies().map(movie =>
      <MovieTile
        title={movie.title}
        image={MoviesHelper.getMovieImage(movie)} />
    )
  }
}

export default App
