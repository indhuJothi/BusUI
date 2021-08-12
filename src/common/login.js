import React from "react";
// import loginImg from "../../login.svg";
import './logreg.css'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mobile :'',
      password :''
    }

    // this.handlechange=this.handlechange.bind(this)
  }

  

  render() {
    return (
      <form className="base-container" onSubmit={this.handleSubmit}>
        <div className="header">Login</div>
        <div className="content">
          </div>
          <div className="form">
          
            <div className="form-group">
              
              <label htmlFor="Mobile">Mobile</label>
              <input type="text" name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handlechange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handlechange} />
            </div>
            <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
       
        </div>
          </div>
       </form>
    );
  }
}

