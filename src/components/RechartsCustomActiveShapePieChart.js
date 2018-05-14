import {PieChart, Pie, Legend} from 'recharts';
import React, {Component} from 'react';
          
const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 3030}, {name: 'Group D', value: 200}]

const data02 = [{name: 'A1', value: 100},
                    {name: 'A2', value: 300},
                   {name: 'B1', value: 100},
                   {name: 'B2', value: 80},
                   {name: 'B3', value: 40},
                   {name: 'B4', value: 30},
                   {name: 'B5', value: 50},
                  {name: 'C1', value: 100},
                  {name: 'C2', value: 200},
                   {name: 'D1', value: 150},
                   {name: 'D2', value: 50}]

class RechartsCustomActiveShapePieChart extends Component{

    
	render () {
        // cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value
     
            return (
                <PieChart width={800} height={400}>
                <Pie data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8"/>
                <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
               </PieChart>
            );
    
  }
}
export default RechartsCustomActiveShapePieChart