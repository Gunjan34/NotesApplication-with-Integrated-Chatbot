import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const authContext = createContext();

const ContextProvider = ({children}) => {
    const [user,setUser] =useState(null);
  const login = (user)=>{
    setUser(user);
  }
//Logout Functionality
  const logout = () =>{
    localStorage.removeItem('token');
    setUser(null);
  }

  useEffect(()=>{
   const verifyUser = async()=>{
    try {
      const res = await axios.get("http://localhost:2000/api/auth/verify",{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
      if(res.data.success){
        setUser(res.data.user)
      }else{
        setUser(null)
      }
    } catch (error) {
      console.log(error)
    }
   }
   verifyUser()
  },[])
  return (
    <authContext.Provider value={{user,login,logout}}>
      {children}
    </authContext.Provider>
  )
}
export const useAuth = () => useContext(authContext);

export default ContextProvider
