
import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import MaterialUICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialUIGrid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Grid, Row, Col, ProgressBar } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import {courseTitle} from '../variables/Variables';
import courseLogo from '../assets/img/courses/courseLogo';
import routes from "routes.js";
import { Route, Switch } from "react-router-dom";
import CourseDetail from './CourseDetail';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  courseTitle: {
    fontSize: '2rem'
  },
  courseDescription: {
    fontSize: '1.5rem'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const courseProgress = [20,90,85,65,23,17,67,93,70];
const getRoutes = (routes,index) => {
  return routes.map((prop, key) => {
    
      return (
        <Route
          path={'/admin/courses/' + index}
          render={props => (
            <CourseDetail
              {...props}
            />
          )}
          key={key}
        />
      );
    
  });
};
function Courses (props){
  var classes = useStyles();
  const handleViewCourse = (e) => {
    console.log("view courses")
  };
  const handleEditCourse = (e) => {
    console.log("edit courses")
  }
  const handleDeleteCourse = (e) => {
    console.log("delete course")
  }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <MaterialUIGrid container spacing={4}>
            {cards.map((index,card) => (
              <MaterialUIGrid item key={card} xs={12} sm={6} md={4}>
                <MaterialUICard className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={courseLogo[index-1]}
                    title="Course Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom>
                      <div className={classes.courseTitle}>{courseTitle[card + 1]}</div>
                    </Typography>
                    <Typography>
                    <div className={classes.courseDescription}>This is a great course!</div>
                      
                    </Typography>
                    <Typography>
                    <ProgressBar now={courseProgress[index - 1]} label={`${courseProgress[index - 1]}%`} />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="primary">
                      <Switch>
                        {getRoutes(routes,index)}
                        <div style={{fontSize: '1.5rem'}}>View</div>
                      </Switch>
                     
                    </Button>
                    <Button size="large" color="primary">
                    <div style={{fontSize: '1.5rem'}} onClick={handleEditCourse}>Edit</div>
                    </Button>
                    <Button size="large" color="warning">
                    <div style={{fontSize: '1.5rem'}} onClick={handleDeleteCourse}>Delete</div>
                    </Button>

                  </CardActions>
                </MaterialUICard>
              </MaterialUIGrid>
            ))}
          </MaterialUIGrid>
        </Container>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  
}

export default Courses;
