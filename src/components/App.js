import React, { Component } from 'react'
import '../styles/App.css'
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
        <div id="hero" className="Hero">
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
