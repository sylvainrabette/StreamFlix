import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/MediaQueries.css'
import MoviesHelper from '../data/moviesHelper'

import Header from './Header'
import MovieTile from './MovieTile';
import Constants from '../data/constants'

class App extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      movies: MoviesHelper.getMovies(),
      searchText: '',
      category: Constants.Category.All
    }
  } 

  render() {
    return (
      <div className="App">
        <Header
          onLiveChange={ (e) => this.onLiveChange(e) }
          onCategorySelected={ (category) => this.setState({ category })}/>
        <div className="movie-list">
          {this.generateMovieTiles()}
        </div>
      </div>
    )
  }

  generateMovieTiles() {
    const movies = MoviesHelper.filter({
      text: this.state.searchText,
      category: this.state.category
    })

    return movies.map(movie =>
      <MovieTile
        title={movie.title}
        image={MoviesHelper.getMovieImage(movie)} />
    )
  }

  onLiveChange (e) {
   const searchText = e.target.value
   this.setState({ searchText })
  }

}

export default App
