import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts';

class BarAndPieChart extends Component{

    render() {
        const pieData = [{
          name: 'Jane',
          y: 13
        }, {
          name: 'John',
          y: 23
        }, {
          name: 'Joe',
          y: 19
        }];
    
        return (
          <div className="app">
            <HighchartsChart>
     
    
              <Title>Combination chart</Title>
    
              <Legend layout="vertical" align="right" verticalAlign="middle" />
              <XAxis id="x" categories={['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']} />
    
              <YAxis id="number">
                <ColumnSeries id="jane" name="Jane" data={[3, 2, 1, 3, 4]} color='blue'/>
                <ColumnSeries id="john" name="John" data={[2, 3, 5, 7, 6]} />
                <ColumnSeries id="joe" name="Joe" data={[4, 3, 3, 9, 0]} />
                <SplineSeries id="average" name="Average" data={[3, 2.67, 3, 6.33, 3.33]} />
                <PieSeries id="total-consumption" name="Total consumption" data={pieData} center={[100, 70]} size={100} showInLegend={false} />
              </YAxis>
            </HighchartsChart>
    


           
          </div>
        );
      }

}

export default withHighcharts(BarAndPieChart, Highcharts);