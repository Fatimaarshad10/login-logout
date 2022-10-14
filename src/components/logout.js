import React  from "react";
import axios from 'axios'
function Logout() {
 const AuthLogout = ()=>{
axios.get('/auth/logout').then(res=>{
  if(res.data){
    window.location.href='/'
  }
})
 }
  
    
  return (
   <>
   <button onClick={AuthLogout}>logout</button>
    <h1>logout the user from database </h1>
   </>
  )
}

export default Logout