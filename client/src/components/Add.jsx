import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Add a movie...'
    };

    this.handleAddZoneClick = this.handleAddZoneClick.bind(this);
    this.handleAddZoneChange = this.handleAddZoneChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }

  handleAddZoneClick() {
    this.setState({
      value: ''
    });
  }

  handleAddZoneChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleAddButtonClick() {
    this.props.addMovie(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div className="addzone">
        <input type="text" value={this.state.value} onClick={this.handleAddZoneClick} onChange={(event) => this.handleAddZoneChange(event)}/>
        <button className="add" onClick={this.handleAddButtonClick}>Add Movie</button>
      </div>
    );
  }

}

export default Add;