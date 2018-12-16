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
      <div id="search" className="search">
        <input
          type="search"
          ref={(input) => { this.nameInput = input; }} 
          placeholder="Search for a title..."
          onChange={ (event) => this.props.onLiveChange(event) }
          onBlur={(event) => this.props.onActivateSearch(event) } />
        </div>
    )
  }
}

export default Search