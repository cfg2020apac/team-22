
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
import axios from "axios";
import {config} from "../pages/Login/handleToken.jsx"

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData : {
        firstName: "",
        lastName:"",
        email: "",
        phoneNumber: "",
        country: "",
        password: "",
        confirmPassword: "",
        username: ""
      }
    }
  }

  async componentDidMount(){
    await this.getUser();
  }

  async getUser(){
    let res = await axios.get('/user', config);
    this.setState({
      userData: {...this.state.userData,...res.data.userCredentials}
    })
  }

  async updateUserProfile(){
    console.log(this.state.userData)
    let res = await axios.post('/user', this.state.userData, config);
    await this.getUser();
  }

  render() {
    var userData = this.state.userData;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          value: "JPMorgan Chase & Co.",
                          disabled: true
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: userData.username,
                          onChange: (e)=>{this.setState({username: e.target.value})}
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: userData.email,
                          onChange: (e)=>{this.setState({email: e.target.value})}
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: userData.firstName,
                          onChange: (e)=>{this.setState({firstName: e.target.value})}
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: userData.lastName,
                          onChange: (e)=>{this.setState({lastName: e.target.value})}
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Address",
                          defaultValue:
                            "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Hong Kong"
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: userData.country,
                          onChange: (e)=>{this.setState({country: e.target.value})}
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Hi, This is Pavel! "
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill onClick={()=>this.updateUserProfile()}>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
              
                bgImage="https://res.cloudinary.com/ideation/image/upload/w_870/cy7q9qguz4siocn9tdof.png?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name={`${userData.firstName} ${userData.lastName}`}
                userName={`${userData.username}`}
                description={
                  <span>
                    "I am a guy who is passoniate about coding.
                    <br />
                    Drop me a message to share your thoughts on coding!
                  </span>
                }
                
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
