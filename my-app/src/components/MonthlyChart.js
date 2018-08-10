import React from 'react';
import { Table } from 'reactstrap';
import { PieChart } from "react-easy-chart";
import '../App.css'



const MonthlyChart = (props) => {

    let data1 = [];

    if(props.dataObjMonthly.percent != undefined){
        for( let i = 0; i < props.dataObjMonthly.percent.length ; i++){
        data1.push({
            key: props.dataObjMonthly.months[i],
            value: parseInt(props.dataObjMonthly.percent[i])
        });
    }
    console.log(data1)
}
    
    
    
    return (
    //    Chart 1 all months

    // <PieChart data=[{props.dataObjMonthly.percent.map((dataEntry,i) => ( {key: {props.dataObjMonthly.months[i]}, value:{props.dataObjMonthly.percent[i]}}))}]  />

    <PieChart
    labels
    data={data1}
  />
       
      );
};

export default MonthlyChart;