import React from 'react'
import {Button,Col,Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Invoices = (state)=>{
  console.log(state);
  
  return (
    <div className="Invoices">
      <div className="Invoices__actions">
        <h6>Actions</h6>
        <Link to="/add"><Button>Add</Button></Link>
      </div>
      <div className="Invoices__main">
        <h6>Invoices</h6>
        <div className="table">
          <Row className="table-head">
            <Col>Create</Col>
            <Col>No</Col>
            <Col>Supply</Col>
            <Col>Comment</Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default connect(
  state=>({
    state
  })
  )(Invoices)