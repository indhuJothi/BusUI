import React from 'react'
import './bookticket.css'
import ShowTicket from './showticket'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
class BookTicket extends React.Component{

  constructor(){
    super()
    {
      this.state={
        values:[],
        showticket :false,
        letsshow : true
      }
      this.getvalue=this.getvalue.bind(this)
      this.validate = this.validate.bind(this)
    }
  }
  getvalue(e){
    const values = this.state.values
    let index
    if (e.target.checked) {
      
      values.push(+e.target.value)
    } else {

      index = values.indexOf(+e.target.value)
      values.splice(index, 1)
    }
    this.setState({ values: values})
    console.log(values)
  }
validate(e){
  e.preventDefault();
this.setState({
  showticket:true,
  letsshow:false
})

}

  render()
  {
  let data =this.props.value
  let seats
  let availableSeat =  data.filter(function(element){
           seats= element.availableseats
           return data
  })
  console.log(seats)
     let seatslength=[]
     for(let i=0;i<seats;i++){
         seatslength.push(i)
     }
     console.log(seatslength)
    const arr= this.state.values
    return(
      <div>
    {this.state.letsshow?  <div  class='booktable'>
      { seatslength.map(element=>{
        console.log("hi")
        if(element%2==0)
        return <label class="main"><input type="checkbox" value={element+1} onClick={this.getvalue}/><span class="checkmark"></span></label>
       else
        return<label class="main"><input type="checkbox" checked="checked" value={element+1} onClick={this.getvalue}/><span class="checkmark"></span></label>
        
      }
 
          )}
           <button type='submit' onClick={this.validate}>Book Seats</button>
           </div> : null}
      {this.state.showticket? <Router>
    <Link to='/'></Link>
  <Link to='/show-ticket'/>
 <Route path='/'><Redirect to='/show-ticket'></Redirect></Route>
   <Route path="/show-ticket" render={() => <ShowTicket  value={arr}/>} /></Router> : null}
      
       </div>)}}
    
{/* <div >
{this.state.letsshow? <form class='booktable' >
<div>
 
<div>
	<label class="main"><input type="checkbox" value='1' onClick={this.getvalue}/><span class="checkmark"></span></label>
	<label class="main"><input type="checkbox" checked="checked" value='2' onClick={this.getvalue}/><span class="checkmark"></span></label>
	<label class="main"><input type="checkbox" value="3" onClick={this.getvalue}/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='4' onClick={this.getvalue}/><span class="checkmark"></span></label>
 
	</div>
  <div>
	<label class="main">	<input type="checkbox" checked="checked" value='5' onClick={this.getvalue}/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox" value='6'onClick={this.getvalue} /><span class="checkmark"></span></label>
	<label class="main"><input type="checkbox" checked="checked"value='7' onClick={this.getvalue}/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='8' onClick={this.getvalue}/><span class="checkmark"></span></label>
  </div>
  </div>
  <div>
  <div>
  <label class="main"><input type="checkbox" value='9' onClick={this.getvalue}/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='10' onClick={this.getvalue} /><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='11'onClick={this.getvalue}/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='12'onClick={this.getvalue}/><span class="checkmark"></span></label>
  </div>
  
  <button type='submit' onClick={this.validate}>Book Seats</button>
 

  
  </div>
   

  </form> : null}
  {this.state.showticket? <Router>
    <Link to='/'></Link>
  <Link to='/show-ticket'/>
 <Route path='/'><Redirect to='/show-ticket'></Redirect></Route>
   <Route path="/show-ticket" render={() => <ShowTicket  value={arr}/>} /></Router> : null}
</div>

  
    )
  }
} */}



export default BookTicket