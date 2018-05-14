import {Doughnut} from 'react-chartjs-2';
import React, {Component} from 'react';
          
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class ReactChartJS2Doughnut extends Component{

    constructor(props){
        super(props)
        this.state = {
            labels: [
                'Red',
                'Green',
                'Yellow'
              ],
              datasets: [{
                data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
                backgroundColor: [
                '#FFC0CB',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FFC0CB',
                '#36A2EB',
                '#FFCE56'
                ]
              }]    
        }
    }


    
	render () {

            return (
                <Doughnut data={this.state} />
            );
    
  }
}
export default ReactChartJS2Doughnut