import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Container,Col, Form,Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { loginUserAction } from '../actions/logOut';



class Login extends Component {
  onHandleLogin = (event) => {
      event.preventDefault();
      let username = event.target.username.value;
      let password = event.target.password.value;

      const data = {
        username, password
      };
        this.props.dispatch(loginUserAction(data));
  }


  render() {
    
    let loginStatus ,message='';
    let {isLoggedIn}= this.props;
    if (isLoggedIn) {
      loginStatus= isLoggedIn.loginSucess;
      if(!loginStatus){
        message = isLoggedIn.failedMessage;
      }
    }
    else {
      // In case of page refresh verify if user exist in cookie
      // but state will get lost
      // let userExist = checkCookie();
      // if(userExist){
      //   loginStatus = true;
      // }
    }
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h3>Login Page</h3>
        </Row>
    {!loginStatus ? '' : <Redirect to='search-planet' />}
        <Row className="justify-content-md-center">
        <Col xs lg="4">
        <Form onSubmit={this.onHandleLogin}>
        <FormGroup  >
            <FormLabel htmlFor="username">User Name</FormLabel>
            <FormControl required type="text" className="form-control" name="username" id="username" />
          </FormGroup>
          <FormGroup >
            <FormLabel  htmlFor="password">Password</FormLabel>
            <FormControl  required className="form-control" type="password" name="password" id="password" />
          </FormGroup>
          {!loginStatus ? <p className="justify-content-md-center error-class">{message}</p> : ''}
          <FormGroup >
            <Button type="submit" className="btn btn-primary btn-block">Login</Button>
          </FormGroup>
        </Form>
        </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {isLoggedIn: state.login.response};
}


export default connect(mapStateToProps)(Login);

