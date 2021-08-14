// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import App from "./App";
// import Search from '../bus/search'
// import Historytable from '../user/historytable';

// import './route.css'

// // import Main from './main';

// // import Tabledata from '../user/tabledata';
// // import ShowTicket from './showticket';


// class Menu extends Component {

// 	constructor(){
// 		super()
// 		{
// 			this.state={
// 				center : true
// 			}
// 			this.hide= this.hide.bind(this)
// 		}

// 	}
// 	hide(){
// 		this.setState({
// 			center:false
// 		})
// 	}
// render() {
// 	return (
//         <div>
          
//      <div>
// 	<Router>
// 		<div className="App">
// 			<ul className="App-header">
// 			<li class='li'><Link class='link' to="/" onClick={this.hide}></Link></li>
// 			<li class='li'><Link  class='link' to="/book-tickets">BookTickets</Link></li>
// 			<li class='li'><Link class='link' to='/booking-history'>BookingHistory</Link></li>
// 			<li class='li'> <Link class='link' to='/bus-table'></Link></li>
// 			<li class='li'> <Link class='link' to='/book-seat'></Link> </li>
// 		 </ul>
			
// 			<Switch>	
// 		    {/* <Route exact path='/' component={App}></Route> */}
// 			<Route exact path='/book-tickets' component={Search}></Route>
// 			<Route exact path='/booking-history' component={Historytable}></Route>
// 			{/* <Route exact path='/bus-table' component={Tabledata}></Route>
// 			<Route exact path='/book-seat' component={ShowTicket}></Route> */}
// 		    </Switch>
// 		</div>
// 	</Router>


//     </div>
// 	<Search/>
//     </div>
// );
// }
// }

// export default Menu


import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from "./App";
import Search from '../bus/search'
import Historytable from '../user/historytable';
import './route.css'
import Main from './main';
// import './App.css';

class Menu extends Component {

	constructor(){
		super()
		{
			this.state={
				center : true
			}
			this.hide= this.hide.bind(this)
		}

	}
	hide(){
		this.setState({
			center:false
		})
	}
render() {
	return (
        <div>
          
            <div>
	      <Router>
		<div className="App">
			<ul className="App-header">
			
			<li class='li'>
				<Link class='link' to="/" onClick={this.hide}></Link>
			</li>
			<li class='li'>
				<Link  class='link' to="/book-tickets" onClick={this.hide}>BookTickets</Link>
			</li>
			<li class='li'> 

				<Link class='link' to='/booking-history' onClick={this.hide}>BookingHistory</Link>
			</li>
			</ul>
			<Switch>
			{/* <Route exact path='/'><p class='welcome'>Welcome to the Bus booking app</p>
			<marquee class='welcome'>Explore the world!!! Enjoy the moment</marquee></Route> */}

			<Route exact path='/'>
			   <Redirect to ='/book-tickets'/>
			</Route>
			<Route exact path='/book-tickets' component={Search}>
				
			</Route>
			<Route exact path='/booking-history' component={Historytable}></Route>

			</Switch>
		</div>
	</Router>


    </div>
	<Search/>
    </div>
);
}
}

export default Menu
