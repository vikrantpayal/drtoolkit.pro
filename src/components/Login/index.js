import './style.css'
import React from 'react'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

function Login(){

   const [ user, setUser ] = useState({})

   function handleCallbackResponse(response){
   
       console.log("Encoded JWT ID token: " + response.credential)
       var userObject = jwt_decode(response.credential)
       console.log(userObject)
       setUser(userObject) 
       document.getElementById("signInDiv").hidden = true
   }
   
   function handleSignOut(event){
       setUser( {} )
       document.getElementById("signInDiv").hidden = false    
   }
      
      useEffect ( ()=> {
         /* global google */
             google.accounts.id.initialize({
                 client_id:"666917577965-f3mhgi6slq6cvtgmdk202gar7g8elut7.apps.googleusercontent.com",
                  callback:handleCallbackResponse})
             google.accounts.id.renderButton(
                 document.getElementById("signInDiv"),
                 { theme: "outline", size: "large" }
             )
          }, []
      )

    return (
        <div>
            <br/>
            <h2> Sign in / Log in </h2>
            <br/>
            <br/>

            <div id="signInDiv"></div>
            {
                user &&
                <div>
                   <img src={user.picture}></img><br/><br/>
                   <h3>{user.name}</h3>
                   <br/><br/>
                   <button onClick={ (e) => handleSignOut(e)}>Sign Out </button>
               </div>
            }
            <br/><br/><br/>  
           </div>
    )
}

export default Login
