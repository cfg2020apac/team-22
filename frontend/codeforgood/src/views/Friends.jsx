
import React, { Component } from "react";
import MaterialUICard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MaterialUIGrid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Row, Col, ProgressBar } from "react-bootstrap";
import {friendList} from '../variables/Variables';
import friendsLogo from '../assets/img/friends/friendsLogo';
import {username} from '../variables/Variables';
import {userdescription} from '../variables/Variables';
import Button from "components/CustomButton/CustomButton.jsx";
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
  friendList: {
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
function Friends (props){
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
                    image={friendsLogo[index-1]}
                    title="Course Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom>
                      <div style={{display: 'block', textAlign:'center', fontSize:'20px'}} className={classes.friendList}>{friendList[card + 1]}</div>
                      <div style={{display: 'block', textAlign:'center', fontSize:'10px'}}className={classes.username}>{username[card + 1]}</div>
                      <div style={{display: 'block', textAlign:'center', fontSize:'15px'}}className={classes.userdescription}>{userdescription[card + 1]}</div>
                      
                    </Typography>
                  
                  </CardContent>
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

export default Friends;
