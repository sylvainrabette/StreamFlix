import React from 'react'

class Search extends React.Component {

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
    return (
      <div id="search" className="search">
        <input
          type="search"
          ref={(input) => { this.nameInput = input; }} 
          placeholder="Search for a title..."
          onChange={ (event) => this.props.onLiveChange(event) }/>
        </div>
    )
  }
}

export default Search