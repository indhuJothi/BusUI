import React, { Component } from 'react';
import './newtable.css'
import BookTicket from './bookticket';

class Table extends Component {

    constructor(props){
        super(props)
        {
            this.state={
                isbookticket : false,
                showtable:true
            }
        this.bookticket = this.bookticket.bind(this)

        }
    }

    bookticket(){
        this.setState({
            isbookticket:true,
            showtable :false
        })
    }

  buildTable = (columns, data, key) => {
    let headerRow = [];
    let dataRows = [];
    let length = this.props.data.length
    console.log(length)

   

    columns.forEach (col => {
      headerRow.push(
        <th key={`header-${col.heading}`}>{col.heading}</th>
      );
    });


    data.forEach(item => {
      let dataCells = [];

      
      columns.forEach (col => {
        dataCells.push(
          <td key={`${item[key]}-${col.property}`}>{item[col.property]}</td>
         
        );
      });

      
      dataRows.push(
        <tr key={`${item[key]}-row`}>{dataCells}
       </tr>
        
      )
    });

    return(
      <>
        <thead class='thead'>
          <tr>{headerRow}</tr>
        </thead>
        <tbody class='tbody'>
          {dataRows}
        </tbody>
        
      </>
    );
  
}

  render() {
    const {
      columns,
      data,
      propertyAsKey
    } = this.props;

    return (
    <div>
        
      <table className='table'>
        {this.buildTable(columns, data, propertyAsKey)}
      </table> 
      {this.state.isbookticket ?
       
         <BookTicket/>  : null
     }
       
        </div>
    );
  }

}



export default Table;