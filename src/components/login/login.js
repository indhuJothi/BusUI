// import React from 'react'
// // import 'login.css'

// class Login extends React.Component{
//     constructor(props){
//         super(props);

//     }


//     render(){
//         return(
//             <div>
//                 <form>
//                     <input type='text' value="MobileNum"></input><br></br>
//                     <input type ="password"></input>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Login

import React from "react";
// import loginImg from "../../login.svg";
import '../login/logreg.css'

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Mobile">Mobile</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
          </div>
        </div>
       
      </div>
    );
  }
}

