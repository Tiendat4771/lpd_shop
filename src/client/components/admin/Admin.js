import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/category').then((response) => {
      console.log(response.data);
      // this.setState({ category: response });
    });
  }

  render() {
    return <div />;
  }
}

export default Admin;
