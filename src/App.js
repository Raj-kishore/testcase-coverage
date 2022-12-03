import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hcOptions: {}
    }

  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState({
      hcOptions: {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: 'Average Monthly Precipitation and Temperature in Karasjok, 2021',
          align: 'left'
        },
        subtitle: {
          text: 'Source: ' +
            '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
            'target="_blank">YR</a>'
        },
        xAxis: [{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshair: true
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}°C',
            style: {
              color: "rgba(0,0,0,0)"
            }
          },
          title: {
            text: 'Temperature',
            style: {
              color: "rgba(0,0,0,0)"
            }
          }
        }, { // Secondary yAxis
          title: {
            text: 'Precipitation',
            style: {
              color: "rgba(0,0,0,0)"
            }
          },
          labels: {
            format: '{value} mm',
            style: {
              color: "rgba(0,0,0,0)"
            }
          },
          opposite: true
        }],
        tooltip: {
          shared: true,
          formatter () { 
          
            if(this.y < 50){
              return  ` Data not available `;
            }else{
              return  `<b>${this.x}</b><br/> ${this.y}`;
            }
          }
          
        },
        legend: {
          align: 'left',
          x: 80,
          verticalAlign: 'top',
          y: 80,
          floating: true,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
        },
        series: {
          name: 'Precipitation',
          type: 'column',
          yAxis: 1,
          data: [10,20,30,40,50,60,70,80,90,100],
          tooltip: {
            valueSuffix: ' mm'
          }

        }
      }
    })
  }

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.hcOptions}
        />
      </div>
    );
  }
}

App.propTypes = {

};

export default App;