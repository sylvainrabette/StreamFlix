import React from 'react'

import Constants from '../data/constants'
import Movies from '../data/movies.json'
import '../styles/FilterPanel.css'

class FilterPanel extends React.Component {

  generateTags() {
    // const tags = Constants.Tags
    // for (var tag in tags) {
    //   var currentTag = tags[tag];
    //   return (
    //     <div className="filter-type-toggle">{currentTag}</div>
    //   )
    // }
  }

  render() {
    const filterContainerCls = 'filters-container ' + (this.props.visible ? 'filters-container-open' : 'filters-container-closed')

    // const tags = Movies.title.map((title) => {
    //   return (
    //     <div className="filter-type-toggle">{title}</div>
    //   )
    // })

    return (
      <div className={ filterContainerCls }>
        <div className='movie-tags'>
          {/* { tags } */}
        </div>
      </div>
    )
  }
}

export default FilterPanel