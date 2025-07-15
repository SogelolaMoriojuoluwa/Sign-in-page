import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


import App from './App.jsx'
import SignIn from './component/SignIn.jsx'


const router= createBrowserRouter([
{
  path: '/',
  element:  <App />
 
 
},
{
  path: '/signin',
  element: <SignIn />
},


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_API_KEY}>
       <RouterProvider router={router} />
      </GoogleOAuthProvider>
    
  </StrictMode>,
)
