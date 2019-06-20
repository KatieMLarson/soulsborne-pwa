import React, { Component } from 'react';
import Boss from './Boss.js';
import Api from './Api';
import LadyMaria from './Lady_Maria.gif';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: "",
      description: ""
    }
  }

  handleClick(event) {
    event.preventDefault();
    Api.getBoss().then(result => (
      this.setState({
        name: result.name,
        image: result.image,
        description: result.description
       })
      )
    )
  }

  render() {
    const { name, image, description } = this.state;
    return (
      <div className="App">
          <button onClick={event => {this.handleClick(event)}}>Traverse the Fog</button>
          <Boss name={name} description={description} image={image}/>
      </div>
    );
  }
}

export default App;
