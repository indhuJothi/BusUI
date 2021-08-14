import React from "react";
import "./logreg.css";
import {Signup } from "./index";
import { Login } from "./login";
import { Link, Redirect, Route, Router, Switch } from "react-router-dom";


class App extends React.Component{
  constructor(props)
  {
    super(props);
    {
      this.state={
       isLogin : true,
       hideapp:true
       }
    this.handle =this.handle.bind(this)
    this.handleSignup=this.handleSignup.bind(this)
    this.showapp = this.showapp.bind(this)
   
   
  }
 
  }
  showapp(value){
    this.setState(
      {
      hideapp: value
      }
    )
  }
  handle()
  {
    
   this.setState(
     
         { 
         isLogin : true
         }
    )
  }
  handleSignup(){
    
    this.setState(
      {
        isLogin : false
      }
    )
  }


  render(){
    const isLogin = this.state.isLogin
    const showapp = this.showapp
    const hideapp = this.state.hideapp
    const isuserlogin= this.props.isuserlogin
    

     return(
    
   <div>

 <div class='MainContainer center'>
     <button onClick ={this.handle} class="button">Login</button>
     <button onClick ={this.handleSignup} class="button">Signup</button>
     <div >
     { isLogin? <Login prop={showapp.bind(this)}/>:<Signup/>}
     </div>
     </div> 
     {hideapp ? null : <Redirect to='/search' />} 
   
     {hideapp? null:isuserlogin(true)}
      </div>
   

      
     
    )
  }
} 

export default App