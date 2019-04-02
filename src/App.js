import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Invoices from './containers/Invoices'
import CreateInvoice from './containers/CreateInvoice.js'
import NotFound from './components/NotFound'
import {Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadDB} from './actions'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(loadDB());
  }
  render() {   
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Invoices}/>
          <Route path="/add" component={CreateInvoice} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default connect(state=>({state}))(App);
