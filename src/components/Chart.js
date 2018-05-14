import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {

    const dataArr = props.data.map((d)=> {
        return {x: d.year + '/' + d.quarter, 
        y: parseFloat(d.count/1000)}
    });

    //XYPlot is a wrapper for the rest of elements. 
    //Axes are there to show X and Y axis. 
    //VerticalGridLines to create a grid and LineSeries is a type of chart itself.
    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Period of time(year and quarter)" />
            <YAxis title="Number of pull requests (thousands)" />
                <LineSeries
                    data={dataArr}
                    style={{stroke: 'violet', strokeWidth: 3}}/>
        </XYPlot>
    );
}

export default Chart;

