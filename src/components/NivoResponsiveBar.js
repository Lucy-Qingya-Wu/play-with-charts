import { ResponsiveBar } from '@nivo/bar'
import React, {Component} from 'react'
class NivoResponsiveBar extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                  "country": "AD",
                  "hot dog": 128,
                  "hot dogColor": "hsl(84, 70%, 50%)",
                  "burger": 62,
                  "burgerColor": "hsl(52, 70%, 50%)",
                  "sandwich": 10,
                  "sandwichColor": "hsl(161, 70%, 50%)",
                  "kebab": 192,
                  "kebabColor": "hsl(69, 70%, 50%)",
                  "fries": 22,
                  "friesColor": "hsl(32, 70%, 50%)",
                  "donut": 19,
                  "donutColor": "hsl(224, 70%, 50%)"
                },
                {
                  "country": "AE",
                  "hot dog": 165,
                  "hot dogColor": "hsl(346, 70%, 50%)",
                  "burger": 133,
                  "burgerColor": "hsl(45, 70%, 50%)",
                  "sandwich": 187,
                  "sandwichColor": "hsl(347, 70%, 50%)",
                  "kebab": 134,
                  "kebabColor": "hsl(87, 70%, 50%)",
                  "fries": 77,
                  "friesColor": "hsl(133, 70%, 50%)",
                  "donut": 143,
                  "donutColor": "hsl(56, 70%, 50%)"
                },
                {
                  "country": "AF",
                  "hot dog": 73,
                  "hot dogColor": "hsl(90, 70%, 50%)",
                  "burger": 173,
                  "burgerColor": "hsl(111, 70%, 50%)",
                  "sandwich": 141,
                  "sandwichColor": "hsl(351, 70%, 50%)",
                  "kebab": 14,
                  "kebabColor": "hsl(302, 70%, 50%)",
                  "fries": 21,
                  "friesColor": "hsl(34, 70%, 50%)",
                  "donut": 162,
                  "donutColor": "hsl(62, 70%, 50%)"
                },
                {
                  "country": "AG",
                  "hot dog": 97,
                  "hot dogColor": "hsl(19, 70%, 50%)",
                  "burger": 106,
                  "burgerColor": "hsl(40, 70%, 50%)",
                  "sandwich": 69,
                  "sandwichColor": "hsl(301, 70%, 50%)",
                  "kebab": 120,
                  "kebabColor": "hsl(106, 70%, 50%)",
                  "fries": 166,
                  "friesColor": "hsl(187, 70%, 50%)",
                  "donut": 170,
                  "donutColor": "hsl(198, 70%, 50%)"
                },
                {
                  "country": "AI",
                  "hot dog": 0,
                  "hot dogColor": "hsl(68, 70%, 50%)",
                  "burger": 141,
                  "burgerColor": "hsl(130, 70%, 50%)",
                  "sandwich": 82,
                  "sandwichColor": "hsl(231, 70%, 50%)",
                  "kebab": 143,
                  "kebabColor": "hsl(153, 70%, 50%)",
                  "fries": 93,
                  "friesColor": "hsl(205, 70%, 50%)",
                  "donut": 96,
                  "donutColor": "hsl(129, 70%, 50%)"
                },
                {
                  "country": "AL",
                  "hot dog": 33,
                  "hot dogColor": "hsl(108, 70%, 50%)",
                  "burger": 78,
                  "burgerColor": "hsl(359, 70%, 50%)",
                  "sandwich": 56,
                  "sandwichColor": "hsl(310, 70%, 50%)",
                  "kebab": 20,
                  "kebabColor": "hsl(216, 70%, 50%)",
                  "fries": 25,
                  "friesColor": "hsl(89, 70%, 50%)",
                  "donut": 146,
                  "donutColor": "hsl(149, 70%, 50%)"
                },
                {
                  "country": "AM",
                  "hot dog": 45,
                  "hot dogColor": "hsl(218, 70%, 50%)",
                  "burger": 174,
                  "burgerColor": "hsl(186, 70%, 50%)",
                  "sandwich": 199,
                  "sandwichColor": "hsl(283, 70%, 50%)",
                  "kebab": 42,
                  "kebabColor": "hsl(188, 70%, 50%)",
                  "fries": 58,
                  "friesColor": "hsl(251, 70%, 50%)",
                  "donut": 193,
                  "donutColor": "hsl(117, 70%, 50%)"
                }
              ]
        }
    }
    render(){
        console.log("this.state.data: ", this.state.data)
        return (
            <div>
                haha
                <ResponsiveBar
                    data={this.state.data}
                    keys={[
                        "hot dog",
                        "burger",
                        "sandwich",
                        "kebab",
                        "fries",
                        "donut"
                    ]}
                    indexBy="country"
                    margin={{
                        "top": 50,
                        "right": 130,
                        "bottom": 50,
                        "left": 60
                    }}
                    padding={0.3}
                    colors="nivo"
                    colorBy="id"
                    defs={[
                        {
                            "id": "dots",
                            "type": "patternDots",
                            "background": "inherit",
                            "color": "#38bcb2",
                            "size": 4,
                            "padding": 1,
                            "stagger": true
                        },
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "background": "inherit",
                            "color": "#eed312",
                            "rotation": -45,
                            "lineWidth": 6,
                            "spacing": 10
                        }
                    ]}
                    fill={[
                        {
                            "match": {
                                "id": "fries"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "sandwich"
                            },
                            "id": "lines"
                        }
                    ]}
                    borderColor="inherit:darker(1.6)"
                    axisBottom={{
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "country",
                        "legendPosition": "center",
                        "legendOffset": 36
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "food",
                        "legendPosition": "center",
                        "legendOffset": -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[
                        {
                            "dataFrom": "keys",
                            "anchor": "bottom-right",
                            "direction": "column",
                            "translateX": 120,
                            "itemWidth": 100,
                            "itemHeight": 20,
                            "itemsSpacing": 2,
                            "symbolSize": 20
                        }
                    ]}
                />
            </div>
        ) 
    }
}

export default NivoResponsiveBar