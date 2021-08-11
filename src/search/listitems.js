import React, { Component } from "react";
import './search.css'

const FromList = [' ','Chennai','Madurai','Trichy']

class Item extends Component {
 
    // constructor(props) {
    //     super(props);
      
    // }
  render() {
    return (
      <React.Fragment>
        
          {/* {this.state.listitems.map(listitem => (
            <li class="fromListItems" value={listitem} >{listitem}</li>
          ))} */}
          {FromList.map((From) => (
          
                <option value={From.value}> {From===' '? " " : From}</option>
                      ))} 
        
      </React.Fragment>
    );
  }
}

export default Item;