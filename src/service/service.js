// import React from 'react'
import data from '../user.json'
import login from '../common/login'
import { Route, Router, Switch } from 'react-router-dom'
import BookTicket from '../common/bookticket'

let jsondata = data
console.log(jsondata)

   export default function validatelogin(mobilenum,valpassword) {
        let returnval
        jsondata.user.filter((element)=>{
            if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
            {
          
            returnval = true
            
            // console.log("hello")
            }
            // console.log(element.mobile)
        
        })
      //   console.log(valpassword)
      //   console.log(mobilenum)
        return( returnval
         
        )
        }

   export function getpassword(mobilenum,valpassword){

         let jsonpass
         jsondata.user.filter((element)=>{
            if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
            {
               jsonpass = element.password
            }
           
           }  ) 
         return jsonpass
      }
      
   export function getmobile(mobilenum,valpassword){

      let jsonmobile
      jsondata.user.filter((element)=>{
         if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
         {
            jsonmobile = element.password
         }
        
        }  ) 
      return jsonmobile
   }

         
   export function getemail(mobilenum,valpassword,email){

      let jsonemail
      jsondata.user.filter((element)=>{
         if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword) && (element.email === email))
         {
            jsonemail = element.email
         }
        
        }  ) 
      return jsonemail
   }
      
      


