import React from 'react'
import './table.css'
import Table from '../common/newtable';



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
      heading: 'Booked Seats',
      property: 'bookedseats'
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
     bookedseats:'2',
     ticketfare:'150'
     
    },
    {
      from :'Madurai',
      to : 'Chennai',
      date : '2021-08-19',
      busname : 'Blue Bus',
      busnumber : 'TN544',
      bookedseats:'3',
      ticketfare:'180'
      
     }
  ]
  




class Historytable extends React.Component {

  render() {
    return (
      <>
        <Table
          columns={columns}
          data={data}
          propertyAsKey='from' 
        />
      </>
    );
  }
}

export default Historytable;


