import React from "react";
import "./components/login/logreg.css";
import { Login, Signup } from "./components/login/index";
import Main from "./main";
class App extends React.Component{
  constructor(props)
  {
    super(props);
    {
      this.state={
       isLogin : true
   
       
      }
    this.handle =this.handle.bind(this)
    this.handleSignup=this.handleSignup.bind(this)
   
  }
 
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
    
    return(
      <iframe>
      <div>

    <div class='MainContainer center'>
     <button onClick ={this.handle} class="button">Login</button>
     <button onClick ={this.handleSignup} class="button">Signup</button>
     <div >
     {isLogin?<Login/>:<Signup/>}
     </div>
     </div>
    
      </div>
      </iframe>

     
    )
  }
}

export default App