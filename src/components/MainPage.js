import React, { Component } from 'react'

import MoviesHelper from '../data/moviesHelper'
import Constants from '../data/constants'

import '../styles/MediaQueries.css'
import '../styles/App.css'

import FilterPanel from './FilterPanel'
import MovieTile from './MovieTile'
import NotFound from './NotFound'
import Logo from '../assets/Logo'
import Navigation from './Navigation'
import Search from './Search'
import Icon from './Icon'

import '../styles/Header.css'

class MainPage extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      viewMode: ViewMode.DEFAULT,
      filterVisible: false,
      movies: MoviesHelper.getMovies(),
      searchText: '',
      category: Constants.Category.All,
      searchSettings: { 
        text: '',
        types: [] 
    }
    }
  }

  generateToolbar() {

    switch (this.state.viewMode) {
      case ViewMode.SEARCH:
        return (
          <div className="header">
            <div className="header-left">
              <Logo />
              <Navigation onCategorySelected = { (category) => this.setState({ category })}/> 
            </div>

            <div className="header-right">
              <Search onLiveChange = { (e) => this.onLiveChange(e) } />
              <Icon icon="fa fa-filter fa-lg filter-icon" onClick={ (e) => this.onToggleFilterPanel(e) }/>
            </div>
          </div>   
        )
      
      default:
        return (
          <div className="header">
            <div className="header-left">
              <Logo />
              <Navigation onCategorySelected = { (category) => this.setState({ category })}/> 
            </div>

            <div className="header-right">
              <Icon icon="fa fa-search fa-lg search-icon" onClick={ (e) => this.onActivateSearch(true) }/>
              <Icon icon="fa fa-filter fa-lg filter-icon" onClick={ (e) => this.onToggleFilterPanel(e) }/>
            </div>
          </div>  
        )
    }
  }

  /* ***************
  * ** RENDERER ****
  *************** */
  render() {
    return (
      <div className="App">
      { this.generateToolbar() }
        <FilterPanel
          types={ this.state.searchSettings.types }
          visible = { this.state.filterVisible } />
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

  onActivateSearch (active) {
    this.setState({ viewMode: active ? ViewMode.SEARCH : ViewMode.DEFAULT })
    this._focusInput = true
}

  onLiveChange (e) {
   const searchText = e.target.value
   this.setState({ searchText })
  }

  onToggleFilterPanel () {
    this.setState({ filterVisible: !this.state.filterVisible })
  } 

}

const ViewMode = {
  DEFAULT: 0,
  SEARCH: 1
}

export default MainPage
