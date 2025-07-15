import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import '../assets/SignIn.css'

function SignIn() {
const location = useLocation()
const userInfo = location.state?.user

useEffect(() => {

  if(userInfo){
    console.log("User data from login:", userInfo)
  }
}, [userInfo])

  return (
   <>
   <div className="content">
      <div className="content-body">
         <h2>Welcome {userInfo?.name}</h2>
       <div className="image">
         <img src={userInfo?.picture} alt="" />
       </div>
       
       <p>{userInfo?.email}</p>
      </div>
    </div>
   </>
  )
}

export default SignIn
