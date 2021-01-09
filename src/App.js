import React from "react";
import Carousel from './Carousel';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      info: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('https://api.spacexdata.com/v3/launches?limit=15')
      .then((res) => res.json())
      .then((val) => this.setState({ info: val.slice(0, 20), isLoading: false }))
      .catch((err) => console.error('Opps !', err));
  }
  render() {
    return (<div className="App">
      { this.state.isLoading ? <div> Loading app .... </div> : <Carousel details={this.state.info} />}

    </div>)
  }
}



