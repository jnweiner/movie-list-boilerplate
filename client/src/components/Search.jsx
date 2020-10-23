import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Search...'
    };

    this.handleSearchBarClick = this.handleSearchBarClick.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSearchBarClick() {
    this.setState({
      value: ''
    });
  }

  handleSearchBarChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleButtonClick() {
    this.searchMovies(this.state.value);
    this.setState({
      value: ''
    });
  }

  searchMovies(query) {
    var newDisplay = [];

    this.props.allMovies.forEach(movie => {
      if (movie.title.includes(query)) {
        newDisplay.push(movie);
      }
    });

    if (!newDisplay.length) {
      newDisplay.push({title: 'No movie by that name found'});
    }

    this.props.updateDisplayedMovies(newDisplay);
  }

  render() {
    return (
      <div className="searchbar">
        <input type="text" value={this.state.value} onClick={this.handleSearchBarClick} onChange={(event) => this.handleSearchBarChange(event)}/>
        <button className="submit" onClick={this.handleButtonClick}>Go!</button>
      </div>
    );
  }
}

export default Search;