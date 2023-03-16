import * as React from 'react';
import * as d3 from 'd3';
import {useEffect} from "react";

export function Chart(props) {

    let barChartData = {};

    useEffect(() => {

        const dataChart = [
            {date : new Date(2018,3,4), highTemperature : 34, lowTemperature : 30, avgTemperature : 32},
            {date : new Date(2018,3,5),  highTemperature : 41, lowTemperature : 23, avgTemperature : 26},
            {date : new Date(2018,3,6),  highTemperature : 41, lowTemperature : 25, avgTemperature : 28},
            {date : new Date(2018,3,7),  highTemperature : 40, lowTemperature : 28, avgTemperature : 35},
            {date : new Date(2018,3,8),  highTemperature : 38, lowTemperature : 23, avgTemperature : 30},
            {date : new Date(2018,3,9),  highTemperature : 39, lowTemperature : 25, avgTemperature : 29},
            {date : new Date(2018,3,10),  highTemperature : 28, lowTemperature : 22, avgTemperature : 22}
        ];

        const extentDate = d3.extent(dataChart,data => data.date);
        const dateXScale = d3.scaleTime()
            .domain(extentDate)
            .range([0,650]);

        const yExtendDate = d3.extent(dataChart, data => data.highTemperature);
        const dateYScale = d3.scaleLinear()
            .domain(yExtendDate)
            .range([400,0]);

        barChartData = dataChart.map((d) => {
            return {
                x : dateXScale(d.date),
                y : dateXScale(d.highTemperature),
                height : dateYScale(d.lowTemperature) - dateYScale(d.highTemperature)
            }
        })

        var margin = {top: 30, right: 30, bottom: 70, left: 60},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
        var svg = d3.select("#my_dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
        d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv")
            .then((data) => {
                var x = d3.scaleBand()
                    .range([ 0, width ])
                    .domain(data.map(function(d) { return d.Country; }))
                    .padding(0.2);
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");

// Add Y axis
                var y = d3.scaleLinear()
                    .domain([0, 13000])
                    .range([ height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(y));

// Bars
                svg.selectAll("mybar")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("x", function(d) { return x(d.Country); })
                    .attr("y", function(d) { return y(d.Value); })
                    .attr("width", x.bandwidth())
                    .attr("height", function(d) { return height - y(d.Value); })
                    .attr("fill", "#9b8f8f")
            })

    },[props])



    return (
        <>
            <div  id='my_dataviz'>

            </div>
        </>
    );
};