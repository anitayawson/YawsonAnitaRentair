import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import Forecast from './components/Forecast/Forecast'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "8ba6ae7676msh1ea7c8d29c40468p149f24jsn36391fe1e2fa"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1> Weather App</h1>
        </header>
        <main>
          <Forecast />
        </main>
      </div>
    )
  }
}

