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
    console.log('go!', this.state.value);
    this.setState({
      value: ''
    });
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