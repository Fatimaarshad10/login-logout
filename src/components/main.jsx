import React,{useEffect,useState} from 'react'

function Main() {
const [profile, setProfile] = useState([])
const profileInfo = async()=>{
    const response = await fetch("/auth/userProfile", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    console.log(data)
    setProfile(data)
   
    
  }

useEffect(() => {
  profileInfo()
}, [])

  return (
    <>
    {
    profile.map((userdata)=>(
      <div key={userdata._id}>
      <h1>
        {userdata.username}
      </h1>
      <img src={userdata.thumbnail} alt="image"/>
      
      </div>
    ))
    }
    </>
  )
}

export default Main