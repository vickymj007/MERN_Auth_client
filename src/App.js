import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import axios from "axios";
import { url } from "./components/helpers/url";

function App() {
  const {dispatch, token, isLoggedIn} = useContext(AuthContext)
  axios.defaults.withCredentials = true;

  //get access token
  useEffect(()=>{
    const _appSignIn = localStorage.getItem("_appSignIn")
    if(_appSignIn){
      const getToken = async ()=>{
        const res = await axios.post(`${url}/api/auth/access`,null)
        dispatch({type:"GET_TOKEN",payload:res.data.accessToken})
      }
      getToken() 
    }
  },[dispatch,isLoggedIn])

  //get user data
  useEffect(()=>{
    if(token){
      const getUser = async ()=>{
        dispatch({type:"SIGNIN"})
        const res = await axios.get(`${url}/api/auth/user`,{
          headers:{Authorization:token}
        })
        dispatch({type:"GET_USER",payload:res.data})
      }
      getUser()
    }
  },[dispatch,token])

  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={isLoggedIn ? <ProfileLayout/> :<AuthLayout/>}/>
        <Route path="/auth/reset-password/:token" element={<ResetLayout/>}/>
        <Route path="/api/auth/activate/:activation_token" element={<ActivateLayout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
