import React,{Component} from 'react'
import {Button,Col,Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './Invoices.scss'

class Invoices extends Component{
  
  onDeleteClick=(e)=>{
    this.props.onDelete(e.target.dataset.id);
  }
  render(){
    let invoices = this.props.state.invoices;
    this.tableLine = invoices.db && invoices.db.map((el)=>(
      <Row key ={el.id} className="table-line" >
        <Col>{el.date_created}</Col>
        <Col>{el.number}</Col>
        <Col>{el.date_supply}</Col>
        <Col className='comment'>{el.comment }</Col>
        <div className="delete" onClick={this.onDeleteClick} data-id={el.id}></div>
      </Row>)
    );
    this.table = (
      <div className="table">
        <Row className="table-head">
          <Col>Create</Col>
          <Col>No</Col>
          <Col>Supply</Col>
          <Col>Comment</Col>
        </Row>
        {this.tableLine}
      </div>
    );
    if (invoices.errors !== null) return <p>Error load database</p>
    return (
      <div className="Invoices">
        <div className='title'>
          <h1>Invoices</h1>
          <div className="title__line"></div>
        </div>
        <div className="Invoices__actions">
          <h6>Actions</h6>
          <Link to="/add"><Button>Add new</Button></Link>
        </div>
        <div className="Invoices__main">
          <h6>Invoices</h6>
          {invoices.loading ? <p>Loading...</p> : this.table}        
        </div>
      </div>
    )
  }
}
export default connect(
  (state)=>({
    state
  }),
  dispatch=>({
    onDelete:(id)=>{
      dispatch({type:'DELETE_INVOICE',payload:id})
    }
  })
  )(Invoices)