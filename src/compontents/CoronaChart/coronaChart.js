import React, { useState,useEffect } from 'react';
import axios from "axios";
import {Line} from 'react-chartjs-2';

import classes from './coronaChart.module.css';

import { Typography } from "antd";
const { Title } = Typography;

const state = {
   labels: ['January', 'February', 'March',
            'April', 'May', 'January', 'February', 'March',
            'April', 'May'],
   datasets: [
     {
       label: 'Rainfall',
       fill: false,
       lineTension: 0.5,
       backgroundColor: 'rgba(75,192,192,1)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data: [65, 59, 80, 81, 56]
     }
   ]
 }

const CoronaChart = () => {

   

   const [chartInfo, setChartInfo] = useState([]);
   const [newChartInfo, setNewChartInfo] = useState({
      labels: [],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ]
    });



   useEffect(() => {
      axios
        .get("https://pomber.github.io/covid19/timeseries.json")
        .then(response => {
           
         // setChartInfo(response.data["Serbia"].slice(Math.max(response.data["Serbia"].length - 10, 0)));
            const responseFilter = response.data["Serbia"].slice(Math.max(response.data["Serbia"].length - 10, 0));

         const chartArr = {
            labels: [],
            datasets: [
              {
                label: 'Ukupno zaraženih',
                title:'LELE',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'blue',
                borderWidth: 2,
                data: []
              },
              {
               label: 'Broj smrtnih slučaja',
               title:'LELE',
               fill: false,
               lineTension: 0.5,
               backgroundColor: 'rgba(75,192,192,1)',
               borderColor: 'red',
               borderWidth: 2,
               data: []
             }
            ]
          }

          responseFilter.forEach((el) => {
             let dataInf = [];
            //  dataInf.push(el['deaths']);
            chartArr.labels.push(el['date']);
            chartArr.datasets[0]['data'].push(el['confirmed']);
            chartArr.datasets[1]['data'].push(el['deaths']);
          });
          setChartInfo(chartArr);
          console.log(chartArr);

          
         })
        
    }, []);

   

   return (
      <div className = {classes.mainChart}>
         <Title level={2}>Hronologija Covid-19 pandemije</Title>
         <Line
          data={chartInfo}
          options={{
            
            title:{
              display:true,
              // text:'Broj zaraženih u poslednjih 10 dana',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
   );
};


export default CoronaChart;