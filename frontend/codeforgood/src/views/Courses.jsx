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
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import {courseTitle} from '../variables/Variables';
import courseLogo from '../assets/img/courses/courseLogo';
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Courses (props){
  var classes = useStyles();
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
                    <Typography gutterBottom variant="h5" component="h2">
                      {courseTitle[card + 1]}
                    </Typography>
                    <Typography>
                      This is a great course!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
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
