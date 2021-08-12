import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.css'
// import App from './App';
import logo from'../signlogo.jpg'
import './main.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';
import Historytable from '../user/historytable';
import Search from '../bus/search';

class Main extends React.Component{
    constructor(){
        super();
        this.state={
           component : false,
           othercomponent:true

        }
        this.change = this.change.bind(this)
    
    }

    change(){
        let update = !this.state.component
        let otherupdate =!this.state.othercomponent
       this.setState({
           component : update,
           othercomponent : otherupdate,
           isLogin:true

       })
    }



    render(){
        return(
            <div class="body">
               
            <div class='header'>   
            <span class='apptitle'>Bus Booking App</span>     
                     <a class='logobut'  onClick={this.change} >
                     {/* < p class='name'> */}
                        <img src={logo} class='signuplogo' ></img>
                        {this.state.isLogin ? 'Indhu': null} 
                     </a>
                    
                     </div> 
                     
                
             
             
            </div>
            
        )
    }
}

export default Main