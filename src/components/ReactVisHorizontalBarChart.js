import React, {Component} from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    HorizontalBarSeries,
    HorizontalBarSeriesCanvas
} from 'react-vis';

class ReactVisHorizontalBarChart extends Component{
    constructor(props){
        super(props)
        this.state = {
            useCanvas: false
        }
    }

    render() {
        const {useCanvas} = this.state;
        const BarSeries = useCanvas ? HorizontalBarSeriesCanvas : HorizontalBarSeries;
        const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
        return (
          <div>

            <XYPlot
              width={300}
              height={300}
              stackBy="x">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <BarSeries
                data={[
                  {y: 2, x: 10},
                  {y: 4, x: 5},
                  {y: 5, x: 15}
                ]}
              />
              <BarSeries
                data={[
                  {y: 2, x: 12},
                  {y: 4, x: 2},
                  {y: 5, x: 11}
                ]}/>
            </XYPlot>
          </div>
        );
      }

}

export default ReactVisHorizontalBarChart
