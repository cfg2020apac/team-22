
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import award from "assets/img/badges/award.svg";
import awards from "assets/img/badges/awards.svg";
import badge from "assets/img/badges/badge.svg";
import diploma from "assets/img/badges/diploma.svg";
import laurel from "assets/img/badges/laurel.svg";
import medal from "assets/img/badges/medal.svg";
import musicaward from "assets/img/badges/music-award.svg";
import trophy from "assets/img/badges/trophy.svg";

import avatar from "assets/img/faces/face-3.jpg";

class Badges extends Component {
  render() {
    const dummy = [award, awards, badge, diploma, laurel, medal, musicaward, trophy]
    const dummymsg = ["Newbie", "Active Learner", "Veteran Learner", "Scholar", "The Helping Hand", "Leaderboard Champion", "Quick Learner", "Champion"]
    const dummydesc = ["Sign up at JAHK Portal", "Complete 5 courses", "Complete 10 courses", "Complete 5 academic courses", "Post 50 comments in Telegram Chat", "Score the highest in the leaderboard for 2 weeks", "Enroll in 3 courses or more simultaneously", "Complete 20 courses"]

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="View Your Badges"
                content={
                  <div>
                    <Row>
                      <Col>
                        <div>
                          {dummy.map((dum, index) => (
                              <Col key={index} md={4} style={{justifyContent: 'center', marginBottom: '30px'}}>
                                <div style={{display: 'flex'}}>
                                  <img className={'my-1'} style={{width: '30%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '8px'}} src={dum}/>
                                </div>
                                <div style={{display: 'block', textAlign:'center', fontSize:'20px'}}> {dummymsg[index]} </div>
                                <div style={{display: 'block', textAlign:'center', fontSize:'10px'}}> {dummydesc[index]} </div>
                              </Col>
                          ))}
                        </div>
                      </Col>
                      <div>
                      </div>
                    </Row>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Badges;
