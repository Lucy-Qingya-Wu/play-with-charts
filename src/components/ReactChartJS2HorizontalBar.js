import {HorizontalBar} from 'react-chartjs-2';
import React, {Component} from 'react';
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First bar chart',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [10, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
class ReactChartJS2HorizontalBar extends Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         labels: [
    //             'Red',
    //             'Green',
    //             'Yellow'
    //           ],
    //           datasets: [{
    //             data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    //             backgroundColor: [
    //             '#FFC0CB',
    //             '#36A2EB',
    //             '#FFCE56'
    //             ],
    //             hoverBackgroundColor: [
    //             '#FFC0CB',
    //             '#36A2EB',
    //             '#FFCE56'
    //             ]
    //           }]    
    //     }
    // }


    
	render () {

            return (
                <HorizontalBar data={data} />
            );
    
  }
}
export default ReactChartJS2HorizontalBar