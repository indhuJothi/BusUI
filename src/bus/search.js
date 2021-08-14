import React from 'react'
import Item from './listitems';
import To from './to';
import './search.css'
// import TravelTable from './traveltabel';
import Tabledata from '../user/tabledata';
let date
class Search extends React.Component{
    constructor(){
        super();
        this.state={
          visible:false,
            value:" ",
            tovalue: '',
            date: " ",
            button:false,
            showsearch: true

        }
        this.showSource = this.showSource.bind(this)
        this.ShowtoValue= this.ShowtoValue.bind(this)
        this.date= this.date.bind(this)
        this.dateChange= this.dateChange.bind(this)
        this.showTable = this.showTable.bind(this)
  
 
    }
    showSource(e){
     this.setState ({
         
         value:e.target.value
     
        
     })
     

    }
    ShowtoValue(e)
    {
        this.setState({
            tovalue:e.target.value
        })
    }
   
    date(e){
        this.setState({
            // date :
           visible : true
           
        })
      }
    dateChange(e){
      date = e.target.value
    }

    showTable(){

        
        this.setState({
            button:true,
            showsearch:false
        })
    }



    render(){
   
        const value = this.state.value;
        const tovalue= this.state.tovalue;
        
        return(
          <div>
            {this.state.showsearch?<div class='searchContainer'>
              <div class='FromCol'>
                
              <label > From <select  class='From'  value= {this.state.value} onChange={this.showSource}>
                            <Item/>
                     </select> 
              </label> 
                
              <label> To <select   class='From' value= {this.state.tovalue} onChange={this.ShowtoValue}>
                         <To/>
                     </select> 
             </label>
            <label>Date<input type='date' class='frominput' placeholder = "Date" onChange={this.dateChange}></input> 
           </label>  <button class='buttonclass' onClick={this.showTable}>Search</button></div>
            </div>: null }
          {this.state.button ? <Tabledata value={value} tovalue={tovalue} date={date}/>:null}
        </div>
        )
    }
}

export default Search