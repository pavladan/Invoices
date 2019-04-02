import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import loadDB from './loadDB'

export default (history)=> combineReducers({
  router:connectRouter(history),
  invoices : loadDB
})