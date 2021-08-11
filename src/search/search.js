import React from 'react'
import Item from './listitems';
import To from './to';
import './search.css'
// import Calender from './calender';
import TravelTable from './traveltabel';
import ReactDOM from 'react-dom';

class Search extends React.Component{
    constructor(){
        super();
        this.state={
          visible:false,
            value:" ",
            tovalue: '',
            date: " ",
            button:false

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
        
     });

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
        this.setState({
            date : e.target.value,
            visible : false
        })
    }

    showTable(){

        
        this.setState({
            button:true
        })
    }



    render(){
   
        const value = this.state.value;
        const tovalue= this.state.tovalue;
        const date = this.state.date
        return(
            <div>
            <div class='searchContainer'>
              <div class='FromCol'>
                
               <label > From <select  class='From'  value= {this.state.value} onChange={this.showSource}>
                            <Item/>
                       </select> 
              </label> 
                
                 <label> To <select   class='From' value= {this.state.tovalue} onChange={this.ShowtoValue}>
                         <To/>
                     </select> </label> 
                     <div class="date">
                   <input type='text' class='From' value={this.state.date} placeholder= "Date" onFocus={this.date}></input>
                    <button class='From' onClick={this.showTable}>Search</button>
                     </div>
                      {this.state.visible ?<input type="date" class="child" onChange={this.dateChange}></input>: null}
                    </div>
                
                {this.state.button ? <TravelTable value={value} tovalue={tovalue} date={date}/>:null}
           
         </div>
      
               
         
         </div>
        )
    }
}

export default Search