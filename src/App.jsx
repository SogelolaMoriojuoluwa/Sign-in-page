import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './App.css'


function App() {
 const navigate = useNavigate()

  const handleLogout = () => {
    googleLogout()
  }

  return (
    <>
     <div className='container'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log(decoded)
          navigate('/signin', { state: { user: decoded } })
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        type='standard'
        logo_alignment= 'left'
        size='large'
       
      />
     </div>
    </>
  )
}

export default App
