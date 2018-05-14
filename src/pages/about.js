import Layout from '../components/Layout';
import Chart from '../components/Chart';
import React, {Component} from 'react';
import NVD3Chart from 'react-nvd3';
import BarAndPieChart from '../components/BarAndPieChart';

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

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
    componentDidMount(){
        fetch(API_URL)
        .then(res=>{
            if (res.ok){
                return res.json()
            }
            else{
                console.log("something went wrong");
                throw new Error('something went wrong');
            }
        })
        .then(res=>{
            // one example: {"name":"JavaScript","year":"2012","quarter":"2","count":"16411"},
            console.log("here is results aa", res);
            this.setState({
                results:res.results.filter(r=>r.name==='JavaScript')
            })
        })
    }
    render(){
        const {results, datum} = this.state;
        console.log("here is results bb", results);
        
        return (
            <Layout>
                <p>Welcome to about page</p>
                <Chart data={results}/>
                <BarAndPieChart />

            </Layout>
        )
    }
}

export default About