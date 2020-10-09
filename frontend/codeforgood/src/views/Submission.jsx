
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

import avatar from "assets/img/faces/face-3.jpg";

function Submission(props) {
  
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={3}>
              <div> <b>Due</b>  Oct 10 by 6pm</div>
            </Col>
            <Col md={3}>
              <div><b>Points</b>  3</div>
            </Col>
            <Col md={3}>
              <div><b>Submitting</b>  a file upload</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  
}

export default Submission;
