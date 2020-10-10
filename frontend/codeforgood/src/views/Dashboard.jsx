
import React, { Component, useState } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";

import Board from 'react-trello';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

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
const styles = ((theme) => ({
uiProgess: {
  position: 'fixed',
  zIndex: '1000',
  height: '31px',
  width: '31px',
  left: '50%',
  top: '35%'
}
  })
);
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: '',
      title: '',
      body: '',
      todoId: '',
      errors: [],
      open: false,
      uiLoading: true,
      buttonType: '',
      viewOpen: false
    };

    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
    this.handleEditClickOpen = this.handleEditClickOpen.bind(this);
    this.handleViewOpen = this.handleViewOpen.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  handleTranslateTodo = (data) => {
    console.log(data);
    console.log(typeof data[2]['createdAt'])
    var cardsData = [];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    data.map((key, index) => {
      cardsData.push({
        id: index.toString(),
        title: key['title'],
        description: key['body'],
        label: typeof key['createdAt'] === 'string'? 
        (monthNames[new Date(key['createdAt']).getMonth()] + ' ' + new Date(key['createdAt']).getDate()
      ): (monthNames[new Date(key['createdAt']['_seconds']).getMonth()] + ' ' + new Date(key['createdAt']['_seconds']).getDate())
      , metadata: { sha:key['todoId'] }
    , editable: true,
  editLaneTitle: true  });
    })
    const output = {
      lanes: [{
        id: 'lane1',
        title: 'Upcoming Task',
        label: data.length + '/' + data.length,
        cards: cardsData,
        draggable: true
      }
        , {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: [],
        draggable: true
      }
        ,
      {
        id: 'lane3',
        title: 'Waiting for feedback',
        label: '0/0',
        cards: [],
        draggable: true
      }
      ]
    }
    this.setState({
      todos: output
    })
  }
  componentWillMount = () => {
    const authToken = localStorage.getItem('ClientToken');
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios
      .get('/todos')
      .then((response) => {
        this.handleTranslateTodo(response.data);
        this.setState({
          uiLoading: false
        });
        
      })
      .catch((err) => {
        console.log(authToken);
        console.log(err);
      });
  };

  deleteTodoHandler(data) {
    const authToken = localStorage.getItem('ClientToken');
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    let todoId = data.todo.todoId;
    axios
      .delete(`todo/${todoId}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleEditClickOpen(data) {
    this.setState({
      title: data.todo.title,
      body: data.todo.body,
      todoId: data.todo.todoId,
      buttonType: 'Edit',
      open: true
    });
  }

  handleViewOpen(data) {
    this.setState({
      title: data.todo.title,
      body: data.todo.body,
      viewOpen: true
    });
  }


  createLegend = (json) => {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<div className={type} key={i} style={{ display: "inline" }}>{json["names"][i]}</div>);
      legend.push(" ");
    }
    return legend;
  };

  handleDeleteCard = (num,lane) => {
    var passToDelete = {
      todo: {
        todoId: ''
      }
    }
    console.log(this.state.todos.lanes[0]['id'])
    console.log(lane)
    this.state.todos.lanes.map((key,index) => 
     
      (key['id'] == lane?
      passToDelete.todo.todoId = key['cards'][num]['metadata']['sha']
      : {})
    )
    console.log(passToDelete);
    this.deleteTodoHandler(passToDelete);
  }
  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  handleClickOpen = () => {
    this.setState({
      todoId: '',
      title: '',
      body: '',
      buttonType: '',
      open: true
    });
      };
  handleClose = (event) => {
    this.setState({ open: false });
      };
    handleSubmit = (event) => {
        //authMiddleWare(this.props.history);
        event.preventDefault();
        const userTodo = {
          title: this.state.title,
          body: this.state.body
        };
        let options = {};
        if (this.state.buttonType === 'Edit') {
          options = {
            url: `/todo/${this.state.todoId}`,
            method: 'put',
            data: userTodo
          };
        } else {
          options = {
            url: '/todo',
            method: 'post',
            data: userTodo
          };
        }
        const authToken = localStorage.getItem('AuthToken');
        axios.defaults.headers.common = { Authorization: `${authToken}` };
        axios(options)
          .then(() => {
            this.setState({ open: false });
            window.location.reload();
          })
          .catch((error) => {
            this.setState({ open: true, errors: error.response.data });
            console.log(error);
          });
          };
         
  render() {
    const { open, errors, viewOpen } = this.state;
    return (
      <div className="content">
        <Dialog fullScreen open={open} onClose={this.handleClose} TransitionComponent={this.Transition}>
						<AppBar className={"appBar"}>
							<Toolbar>
								<IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
									<CloseIcon />
								</IconButton>
								<Typography variant="h6" className={"title"}>
									{this.state.buttonType === 'Edit' ? 'Edit Todo' : 'Create a new Todo'}
								</Typography>
                                <Button
									autoFocus
									color="inherit"
									onClick={this.handleSubmit}
									className={"submitButton"}
								>
									{this.state.buttonType === 'Edit' ? 'Save' : 'Submit'}
								</Button>
							</Toolbar>
						</AppBar>

						<form className={"form"} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="todoTitle"
										label="Todo Title"
										name="title"
										autoComplete="todoTitle"
										helperText={errors.title}
										value={this.state.title}
										error={errors.title ? true : false}
										onChange={this.handleChange}
									/>
                                    </Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="todoDetails"
										label="Todo Details"
										name="body"
										autoComplete="todoDetails"
										multiline
										rows={25}
										rowsMax={25}
										helperText={errors.body}
										error={errors.body ? true : false}
										onChange={this.handleChange}
										value={this.state.body}
									/>
								</Grid>
							</Grid>
						</form>
					</Dialog>
        <Grid fluid>
          {this.state.uiLoading ? 
					<CircularProgress size={150} className="todo-progress" />
				:<Board style={{ height: "80%" }} data={this.state.todos} onCardDelete={(e,b) => this.handleDeleteCard(e,b)}/>}
          <Row>
            <Col sm={6}>
          <Button bsStyle="info" simple type="button" bsSize="l.5" fill="blue" onClick={this.handleClickOpen}>
                <i className="fa fa-edit" >Add new todo</i>
              </Button>
              </Col>
          </Row>
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
              <div className="legend">{this.createLegend(studentBar)}</div>
            }
          />
        </Grid>

      </div>
    );
  }
}


export default (withStyles(styles)(Dashboard));