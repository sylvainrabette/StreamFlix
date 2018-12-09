import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, browserHistory } from 'react-router-dom'

import MoviesHelper from '../data/moviesHelper'
import Constants from '../data/constants'
import '../styles/MediaQueries.css'
import '../styles/App.css'

import Header from './Header'
import MovieTile from './MovieTile'
import NotFound from './NotFound'

class MainPage extends Component {
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

    if (movies.length) {
      return movies.map(movie =>
        <MovieTile
          title={movie.title}
          image={MoviesHelper.getMovieImage(movie)} />
      )
    }

    return <NotFound />
    
  }

  onLiveChange (e) {
   const searchText = e.target.value
   this.setState({ searchText })
  }

}

export default MainPage
