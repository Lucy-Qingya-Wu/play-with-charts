import Layout from '../components/Layout';
import Chart from '../components/Chart';
import React, {Component} from 'react';
import NVD3Chart from 'react-nvd3';
import BarAndPieChart from '../components/BarAndPieChart';
import NivoResponsiveBar from '../components/NivoResponsiveBar';
import RechartsSimpleLineChart from '../components/RechartsSimpleLineChart';
import RechartsSimpleBarChart from '../components/RechartsSimpleBarChart';
import RechartsCustomActiveShapePieChart from '../components/RechartsCustomActiveShapePieChart';
import ReactChartJS2Doughnut from "../components/ReactChartJS2Doughnut";
import ReactChartJS2HorizontalBar from "../components/ReactChartJS2HorizontalBar";
import VictoryHorizontalBarChart from '../components/VictoryHorizontalBarChart'
import VictoryPieChart from '../components/VictoryPieChart'
import ReactVisHorizontalBarChart from '../components/ReactVisHorizontalBarChart'
import ReactVisHorizontalPieChart from '../components/ReactVisHorizontalPieChart'




class About extends Component{


    constructor(props){
        super(props)
        this.state = {
            results:[],
            datum : [{
                key: "Cumulative Return",
                values: [
                  {
                    "label" : "A" ,
                    "value" : -29.765957771107
                  } ,
                  {
                    "label" : "B" ,
                    "value" : 0
                  } ,
                  {
                    "label" : "C" ,
                    "value" : 32.807804682612
                  } ,
                  {
                    "label" : "D" ,
                    "value" : 196.45946739256
                  } ,
                  {
                    "label" : "E" ,
                    "value" : 0.19434030906893
                  } ,
                  {
                    "label" : "F" ,
                    "value" : -98.079782601442
                  } ,
                  {
                    "label" : "G" ,
                    "value" : -13.925743130903
                  } ,
                  {
                    "label" : "H" ,
                    "value" : -5.1387322875705
                  }
                ]
              }
            ] 
        }

    }

    render(){
        const {results, datum} = this.state;
        console.log("here is results bb", results);
        
        return (
            <Layout>
                <p>Welcome to about page</p>
   

                <h1>------------------- Recharts -------------------</h1>
                <div style={{"width":"50%"}}>
                    <RechartsSimpleBarChart />
                    <RechartsCustomActiveShapePieChart />
                    <br />
                </div>

                <h1>------------------- React ChartJS 2 -------------------</h1>
                <div style={{"width":"50%"}}>
                    <ReactChartJS2Doughnut />
                    <ReactChartJS2HorizontalBar />
                    <br/>
                </div>

                <h1>------------------- Victory -------------------</h1>
                <div style={{"width":"40%"}}>
                    
                    <VictoryHorizontalBarChart />
                    <VictoryPieChart />
                    <br/>
                </div>
               
                <h1>------------------- React JSX Highcharts -------------------</h1>
                <div style={{"width":"70%"}}>                 
                    <BarAndPieChart />
                    
                    <br/>
                </div>

                <h1>------------------- Uber VIS-------------------</h1>
                <div style={{"width":"70%"}}>   
                    <ReactVisHorizontalBarChart />
                    <ReactVisHorizontalPieChart />
                
                </div>


            </Layout>

        )
    }
}

export default About