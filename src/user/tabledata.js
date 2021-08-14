import React, { Component } from 'react';
import Table from '../common/newtable';
// import {Route,Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
let columns = [
  {
    heading: 'From',
    property: 'from'
  },
  {
    heading: 'To',
    property: 'to'
  },
  {
    heading: 'Date',
    property: 'date'
  },
  {
    heading: 'BusName',
    property: 'busname'
  },
  {
    heading: 'BusNumber',
    property: 'busnumber'
  },
  {
    heading: 'availableSeats',
    property: 'availableseats'
  },
  {
    heading: 'TicketFare',
    property: 'ticketfare'
  },
]


let data = [
  {
   from :'Chennai',
   to : 'Madurai',
   date : '2021-08-18',
   busname : 'Red Bus',
   busnumber : 'TN543',
   availableseats:'12',
   ticketfare:'150'
   
  },
  {
    from :'Madurai',
    to : 'Chennai',
    date : '2021-08-19',
    busname : 'Blue Bus',
    busnumber : 'TN544',
    availableseats:'10',
    ticketfare:'180'
    
   },
   {
    from :'Madurai',
    to : 'Trichy',
    date : '2021-08-20',
    busname : 'Green Bus',
    busnumber : 'TN545',
    availableseats:'16',
    ticketfare:'180'
    
   },
   {
    from :'Trichy',
    to : 'chennai',
    date : '2021-08-18',
    busname : 'Purple Bus',
    busnumber : 'TN546',
    availableseats:'12',
    ticketfare:'150'
    
   }
]

class Tabledata extends Component {
    constructor(props)
    {
        super(props)
        {
            this.state={
          columnsfromprop : this.props.value
            }
        }
    }

  render() {
      let columnsfromprop = this.state.columnsfromprop
      const datafromprop = this.props.tovalue
      const datefromprop = this.props.date;
   
    
     let datas =  data.filter(function(element){
        if( element.from === columnsfromprop && element.to === datafromprop && element.date ===datefromprop)
             return data

       })

       console.log(datas)
         
    
    return (
      <>
        {/* <Table
          columns={columns}
          data={datas}
          propertyAsKey='from' //The data property to be used as a key
        /> */}
         {/* <Route exact path='/' render={() => (
    <Link to="/showbooktable">
       <Table  columns={columns}
          data={datas}  />
    </Link>
  )}/> */}
  <Router>
    <Link to='/'></Link>
  <Link to='/showtable'/>
 <Route path='/'><Redirect to='/showtable'></Redirect></Route>
   <Route path="/showtable" render={() => <Table  columns={columns}
          data={datas}
          propertyAsKey='from'   />} /></Router>
      </>
    );
  }
}

export default Tabledata;


