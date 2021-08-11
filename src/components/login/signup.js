// import React from 'react'
// // import 'login.css'

// class Signup extends React.Component{
//     constructor(props){
//         super(props);

//     }


//     render(){
//         return(
//             <div>
//                 <form>
//                     <label>Email: <input type='text' value="enter your email"/><br></br></label>
//                    <label>Mobile: <input type='text' value="MobileNum"></input><br></br></label>
//                    <label>Password: <input type ="password"></input><br/></label>
//                     <label>Confirm Password: <input type='password'/></label>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Signup
import React from "react";
// import loginImg from "../../login.svg";
import '../login/logreg.css'
 export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email :'',
      mobile:" ",
      password: " ",
      confirmPassword: " "
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      email : event.target.value,
      mobile:event.target.value,
      password :event.target.value,
      confirmPassword:event.target.value
    })
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Signup</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="text" name="email" placeholder="xyz@gmail.com" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="Mobile">Mobile</label>
              <input type="text" name="mobile" placeholder="MobileNo" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

