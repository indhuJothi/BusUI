import React from 'react'
import { Router } from 'react-router-dom'
import Main from './common/main'
import Menu from './common/route'
import RouteTable from './common/routeprocess'
let userloggedin 
class Page extends React.Component{
    constructor(props)
    {
        super(props)
        {
           
        }
        this.isuserlogin = this.isuserlogin.bind(this)
        
    }
    isuserlogin(value){
        userloggedin = value
        console.log(userloggedin)
    }
    render(){
        let isuserlogin = this.isuserlogin
        return(
            <>
             <Main userloggedin={userloggedin} />
            <RouteTable isuserlogin={isuserlogin.bind(this)} />
            
            </>
        )
    }
}

export default Page