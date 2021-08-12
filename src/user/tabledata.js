import React, { Component } from 'react';
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
   availableseats:'65',
   ticketfare:'150'
   
  },
  {
    from :'Madurai',
    to : 'Chennai',
    date : '2021-08-19',
    busname : 'Blue Bus',
    busnumber : 'TN544',
    availableseats:'80',
    ticketfare:'180'
    
   },
   {
    from :'Madurai',
    to : 'Trichy',
    date : '2021-08-20',
    busname : 'Green Bus',
    busnumber : 'TN545',
    availableseats:'70',
    ticketfare:'180'
    
   },
   {
    from :'Trichy',
    to : 'chennai',
    date : '2021-08-18',
    busname : 'Purple Bus',
    busnumber : 'TN546',
    availableseats:'50',
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
    //   let length = data.length
    
     let datas =  data.filter(function(element){
        if( element.from === columnsfromprop && element.to === datafromprop && element.date ===datefromprop)
             return data

       })

       console.log(datas)
         
    
    return (
      <>
        <Table
          columns={columns}
          data={datas}
          propertyAsKey='from' //The data property to be used as a key
        />
      </>
    );
  }
}

export default Tabledata;


