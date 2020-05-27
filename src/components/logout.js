import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { loginOutUserAction } from '../actions/logOut';
import { userSearchAction } from '../actions/search';

class LogOut extends Component {

     useLogOut=()=>{
        this.props.dispatch(loginOutUserAction());
        this.props.dispatch(userSearchAction(''));
      }
    render() {
        return (
              <Link to="/" onClick={this.useLogOut}>
                  <i className="fa fa-sign-out pull-right"></i> 
                  Log Out
              </Link>
          );
    }
}
const mapStateToProps = (state) => {
    return {state};
}
export default connect(mapStateToProps)(LogOut);
