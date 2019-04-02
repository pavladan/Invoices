import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './CreateInvoice.scss'

class CreateInvoice extends Component {
  randomString =(string_length = 24,type='char')=> {
    let chars;
    if (type==='char')
      chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    else if (type==='number')
      chars = "0123456789";
    let randomstring = '';
    for (let i=0; i<string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
  }
  addZero=(dat,num)=>{
    if (String(dat).length<num) return this.addZero('0'+dat,num);
    return dat;
  }
  formatDate=(datastring)=>{
    if(!datastring) return '';
    let d = new Date(datastring);
    return this.addZero(d.getDate(),2)+'.'+this.addZero((d.getMonth()+1),2)+'.'+this.addZero(d.getFullYear(),4);
  }
  getDate=()=>{
    let d = new Date();
    let dy=d.getFullYear();
    let dm=(d.getMonth()+1);
    let dd=d.getDate();
    return this.addZero(dy,4)+'-'+this.addZero(dm,2)+'-'+this.addZero(dd,2);
  }
  
  
  onClickSave=()=>{
    this.props.onSaves(
      {
        id: (()=> {
          while(true){ 
            let res=this.randomString(); 
            if(this.props.state.invoices.db && this.props.state.invoices.db.filter(e=>e.id === res).length === 0)
              return res;
          }
        })(),
        number: this.inputNum.value,
        date_created:this.formatDate(this.inputSupplyDate.value),
        date_supply:this.formatDate(this.inputInvoiceDate.value),
        comment:this.inputComment.value
      });
    this.inputNum.value='';
    this.inputSupplyDate.value='';
    this.inputInvoiceDate.value='';
    this.inputComment.value='';
  }
  render(){
    return(
      <div className='CreateInvoice'>
        <div className='title'>
          <h1>Create Invoice</h1>
          <div className="title__line"></div>
        </div>
      <Form>
        <Link to='/' className='exit'></Link>
        <Form.Group>
          <Form.Label>Number</Form.Label>
          <Form.Control type='number' defaultValue={this.randomString(6,'number')} ref={input=>this.inputNum=input} placeholder='Enter Number' min='00000' max='99999'></Form.Control>
          <Row>
            <Col>
              <Form.Label>Supply Date</Form.Label>
              <Form.Control type='date' defaultValue={this.getDate()} ref={input=>this.inputSupplyDate=input} placeholder='Select Date' ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control type='date' defaultValue={this.getDate()} ref={input=>this.inputInvoiceDate=input} placeholder='Select Date' ></Form.Control>
            </Col>
          </Row>
          <Form.Label>Comment</Form.Label>
          <Form.Control as='textarea' rows="3" ref={input=>this.inputComment=input}></Form.Control>
        </Form.Group>
        <Link to='/'>
          <Button className='col-3 offset-9' onClick={this.onClickSave}>Save</Button>
        </Link>
      </Form>
      </div>
    )
  }
}
export default connect(
  state=>({state}),
  dispatch=>({
    onSaves:(payload)=>{
      dispatch({type:'ADD_INVOICE',payload:{...payload}})
    }
  })
  )(CreateInvoice)