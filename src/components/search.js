import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSearchAction } from '../actions/search';
import { Row, Container, Form, FormLabel } from "react-bootstrap";

class SearchPlanet extends Component {
      handleChange = e => {
        e.preventDefault();
        let searchText =e.target.value;
            this.props.dispatch(userSearchAction(searchText.trim()));
      };
    render() {
        let {searchResults}= this.props;
        if (searchResults) {
        }
        return (
          <Container>
            <Row className="justify-content-md-center">
            <Form>
            <Form.Group className="search-page">
            <FormLabel htmlFor="username"></FormLabel>
              <input
                type="text"
                placeholder="Search Planet"
                onChange={this.handleChange}
              />
              <div>
                {searchResults.map((item, index) => (
                  <div style={{fontSize: 15+ (index*2) }} key={index+ 'x'}>{item}</div>
                ))}
              </div>
            </Form.Group>
          </Form>
            </Row>
          </Container>
          );
    }
}
const mapStateToProps = (state) => {
    if(state && state.search && state.search.response && state.search.response.searchResult){
    return {searchResults: state.search.response.searchResult};
    }
    return {searchResults: []};
}
export default connect(mapStateToProps)(SearchPlanet);
