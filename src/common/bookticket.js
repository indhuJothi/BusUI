import React from 'react'
import './bookticket.css'
import ShowTicket from './showticket'
class BookTicket extends React.Component{

  constructor(){
    super()
    {
      this.state={
        values:[],
        showticket :false
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
  showticket:true
})
}

  render()
  {
    const arr= this.state.values
    return(

    
<div >
<form class='booktable' >
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
  <div>
  <label class="main"><input type="checkbox" value='13'onClick={this.getvalue}/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='14'onClick={this.getvalue}/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='15' onClick={this.getvalue} checked='checked'/><span class="checkmark"></span></label>
  <label class="main"><input type="checkbox"value='16'onClick={this.getvalue}/><span class="checkmark"></span></label>
  </div>
 
  </div>
<button type='submit' onClick={this.validate}/>

  </form>
  {this.state.showticket? <ShowTicket value={arr}/> : null}
</div>

  
    )
  }
}



export default BookTicket