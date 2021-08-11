import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import logo from'./signlogo.jpg'
import './main.css'
import App from './App'
import reportWebVitals from './reportWebVitals';
import Table from './table/table';
import Search from './search/search';

class Main extends React.Component{
    constructor(){
        super();
        // this.state={
        //    component : ' '
        // }
        this.change = this.change.bind(this)
    
    }

    change(e){
      return( <App  />
      )
    }



    render(){
        return(
            <div class="body">
                
                 <div>  
                     <button class='logobut'  onClick={(e)=>this.change} >
                        
                         {/* <a href={<App/>}>sign/signIn</a> */}
                         <img src={logo} class='signuplogo' >
                        </img>
                     </button>
                 </div>  
             
              {/* <div class='table'> */}
                <Table/>
              
             {/* </div> */}
              {/* <div class='search'>
                <Search/>
             </div> */}
            </div>
            
        )
    }
}

export default Main