import React from 'react'

import Constants from '../data/constants'
import Movies from '../data/movies.json'
import '../styles/FilterPanel.css'

class FilterPanel extends React.Component {

  render() {
    const filterContainerCls = 'filters-container ' + (this.props.visible ? 'filters-container-open' : 'filters-container-closed')

    const tagList = Constants.Tags
    const tags = Object.keys(tagList).map((item, i) => {
      return (
        <div className="filter-type-toggle" key={i}>{ tagList[item] }</div>
      )
    })

    return (
      <div className={ filterContainerCls }>
        <div className='movie-tags'>
          { tags }
        </div>
      </div>
    )
  }
}

export default FilterPanel