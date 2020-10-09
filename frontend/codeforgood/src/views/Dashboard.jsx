
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import Board from 'react-trello';
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  studentBar,
  studentDataBar,
  optionsBar,
  responsiveBar,
  legendBar,
} from "variables/Variables.jsx";

function Dashboard(props){
  const createLegend = (json) => {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<div className={type} key={i} style={{display: "inline"}}>{json["names"][i]}</div>);
      legend.push(" ");
    }
    return legend;
  };
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Upcoming Task',
        label: '5/8',
        cards: [
          {id: 'Card1', title: 'JA Planning With Purpose', description: '', label: 'Oct 12', metadata: {sha: 'be312a1'}},
          {id: 'Card2', title: 'JA Career Dimensions 4.0', description: '', label: 'Oct 15', metadata: {sha: 'be312a2'}},
          {id: 'Card3', title: 'JA Success Skills', description: '', label: 'Oct 21', metadata: {sha: 'be312a3'}},
          {id: 'Card4', title: 'JA Leader Dialogue', description: '', label: 'Nov 1', metadata: {sha: 'be312a4'}},
          {id: 'Card5', title: 'JA Company Programme', description: '', label: 'Nov 23', metadata: {sha: 'be312a5'}},
          {id: 'Card6', title: 'JA Be My Own Boss', description: '', label: 'Dec 1', metadata: {sha: 'be312a6'}},
          {id: 'Card7', title: 'JA Innovation Camp', description: '', label: 'Dec 7', metadata: {sha: 'be312a7'}},
          {id: 'Card8', title: 'JA More than Money', description: '', label: 'Dec 16', metadata: {sha: 'be312a8'}},

        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      },
      {
        id:'lane3',
        title: 'Waiting for feedback',
        label: '0/0',
        cards: []
      }
    ]
  }


    return (
      <div className="content">
        <Grid fluid>
          <Board style={{height: "80%"}} data={data}/>
          <Card
                id="chartPerformace"
                title="Student Performace"
                category="average scores of students from class A and B"
                stats={"Retrieved at " + new Date().toDateString()}
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={studentDataBar}
                      type="Line"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(studentBar)}</div>
                }
              />
        </Grid>
        
      </div>
    );
  }


export default Dashboard;