import React from 'react'
import './showticket.css'

class ShowTicket extends React.Component{
   constructor(){
       super()
       { 
           this.state={
               name : ' ',
               selectedoption:'',
               age:''
             
           }

       }
   }


    render(){
    const seats = this.props.value
    const selectseats = this.props.value.length
    console.log(selectseats)
    let fare = 150
        return(
            <div class='finalticket'>
              
             {
               seats.map(element=>{
                   
                   return <form class='passengerform'>
                        <h1 class='seatno'>Seat No:{element}</h1>
                      <lable for='name'>Passenger Name:<input class='inputname'  type='text' name='name' value={this.state.name}/></lable>
                      <div>
                      <label for='gender'>Male<input type='radio' class='radio' name='male' value='male' checked={this.state.selectedoption==='male'}/></label>
                      <label for='gender'>Female<input type='radio'class='radio' name='female' value='female' checked={this.state.selectedoption==='female'}/></label>
                      </div>
                      <label for='age'>Age<input type='text' name='age' class='inputname' value={this.state.age}/></label>
                       
                    </form>
                     
                    
                })
              
            }
            <p>TotalFare:{selectseats*fare}</p>
              <button type='submit' class='submit'>Procced to Pay</button>

            </div>
        )
    }
}

export default ShowTicket