import React, { Component, useState } from 'react'

export default class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
  

         getForecast=() =>{

            fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "8ba6ae7676msh1ea7c8d29c40468p149f24jsn36391fe1e2fa"
                }
            })
                .then(response => response.json())
                .then(response => {
                    this.setState({data:response})
                    
                    console.log(response)
                })
                .catch(err => {
                    console.log(err);
                });}
        
        render() {
            return (
                <div>
                    <h2>Find Current Weather Conditions</h2>
                    <div>
                        {JSON.stringify(this.state.data)}
                    </div>
                    <button onClick={this.getForecast}>Get Forecast</button>
                </div>
            )
        
    }
}




