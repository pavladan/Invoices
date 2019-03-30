import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Invoices from './containers/Invoices'
import CreateInvoice from './containers/CreateInvoice.js'
import NotFound from './components/NotFound'
import {Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {Link} from 'react-router-dom'


class App extends Component {
  render() {   
    this.titleGen = (pathname)=>{
      switch (pathname){
        case '/': return 'Invoices';
        case '/add': return 'Create Invoice';
        default: return '';
      }
    }
    console.log(this.props.state);
    return (
      <Container>
        <div className='title'>
         <h1>{this.titleGen(this.props.state.router.location.pathname)}</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Invoices}/>
          <Route path="/add" component={CreateInvoice} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    state
  })
)(App);
