/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import Board from 'react-trello';
function Dashboard(props){
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
          <Board data={data}/>
        </Grid>
      </div>
    );
  }


export default Dashboard;
