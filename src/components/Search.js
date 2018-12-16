import React from 'react'

class Search extends React.Component {

  componentDidMount() {
    this.nameInput.focus()
  }

  onFocusOut() {
    console.log("toto")
  }

  render() {
    return (
      <div id="search" className="searchInput">
        <span className="icon-search"><i className="fa fa-search fa-lg" /></span>
        <input
          type="search"
          ref={(input) => { this.nameInput = input }} 
          placeholder="Search for a title..."
          onChange={ (event) => this.props.onLiveChange(event) }
          onBlur={(event) => this.props.onActivateSearch(event) } />
        <span className="icon-close"><i class="fas fa-times"></i></span>
      </div>
    )
  }
}

export default Search