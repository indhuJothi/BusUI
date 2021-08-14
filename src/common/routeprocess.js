import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from "./App";
import Search from '../bus/search'
import Historytable from '../user/historytable';

// import './route.css'

import Main from './main';

import Tabledata from '../user/tabledata';
import ShowTicket from './showticket';
import Menu from './route';
import BookTicket from './bookticket';
import Table from './newtable';

let data,logintrue
class RouteTable extends Component {

	constructor(){
		super()
		{
			
			
		}
        this.givetabledatas= this.givetabledatas.bind(this)
        this.getvalue=this.getvalue.bind(this)


	}

    givetabledatas(val)
    {
        data = val
    }
    getvalue(value)
    {
      logintrue =value
      console.log(logintrue)
    }
render() {
   let gettablevalue = this.givetabledatas
   let  isuserlogin = this.props.isuserlogin
   let getvalue = this.getvalue

  
 
 
 
	return (
        <div>
           { logintrue ? isuserlogin(true): false }
            <div>
	      <Router>
		<div>
           <Link class='link' to="/" onClick={this.hide}></Link>
		   <Link class='link' to="/login" onClick={this.hide}></Link>
           <Link class='link' to='/search'></Link>
           {/* <Link class='link' to='/showtable'></Link> */}
           <Link class='link' to='/book-seat'></Link>
           <Link class='link' to='/ticket-book'></Link>
           <Route exact path='/'  ><Redirect to='/login'/></Route>
           <Route path="/login" render={() => <App isuserlogin={getvalue.bind(this)}  />} />
 
            <Route exact path='/search' component={Menu} />
            <Route exact path='/book-tickets' render={() => (
    <Link to="/book-tickets">
       <Search gettablevalue ={gettablevalue.bind(this)} />
    </Link>
  )}/>
           
            <Route exact path='/ticket-book' render={() => (
    <Link to="/ticket-book">
       <BookTicket  />
    </Link>
  )}/>
            
            </div>
	</Router>


    </div>
    </div>
);
}
}

export default RouteTable
