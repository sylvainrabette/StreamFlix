import React from 'react'

import Constants from '../data/constants'
import '../styles/FilterPanel.css'

class FilterPanel extends React.Component {

  constructor() {
    super(...arguments)
    this.state = {
      types: this.props.types || []
    }
  }

  render() {
    const filterContainerCls = 'filters-container ' + (this.props.visible ? 'filters-container-open' : 'filters-container-closed')

    const tagList = Constants.Tags
    const tags = Object.keys(tagList).map((key, i) => {

      let clazz = 'filter-type-toggle ' + tagList[key]
      if (this.state.types.indexOf(i) !== -1) {
        clazz += ' filter-type-active'
      }
      if (this.state.types.length === 0) {
          clazz += ' filter-type-inactive'
      }

      return (
        <div className={ clazz } key={i} onClick={() => { this.onTypeClicked(i) }}>
          { tagList[key] }
        </div>
      )
    })

    return (
      <div className={ filterContainerCls }>
        <div className='movie-tags-bar'>
          { tags }
        </div>
      </div>
    )
  }
}

export default FilterPanel