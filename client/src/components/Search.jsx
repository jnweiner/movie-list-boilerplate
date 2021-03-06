import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Search...'
    };

    this.handleSearchBarClick = this.handleSearchBarClick.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
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

  handleSearchButtonClick() {
    if (this.state.value !== '' && this.state.value !== 'Search...') {
      this.searchMovies(this.state.value);
      this.setState({
        value: ''
      });
    }
  }

  searchMovies(query) {
    var newDisplay = [];

    this.props.allMovies.forEach(movie => {
      if (movie.title.toLowerCase().includes(query.toLowerCase())) {
        newDisplay.push(movie);
      }
    });

    if (newDisplay.length) {
      this.props.updateMessage('Displaying matches...');
    } else {
      this.props.updateMessage('No matches found');
    }
    this.props.updateDisplayedMovies(newDisplay);
  }

  render() {
    return (
      <div className="searchbar">
        <input type="text" value={this.state.value} onClick={this.handleSearchBarClick} onChange={(event) => this.handleSearchBarChange(event)}/>
        <button className="submit" onClick={this.handleSearchButtonClick}>Search</button>
      </div>
    );
  }
}

export default Search;