import React from 'react'
import Login from '../../components/Login/Login'
import banner from '../../assets/images/banner.png'

const LoginPage = () => {
  return (
    <div style={{display : "flex"}}>
      <Login/>
      <img 
        style={{maxHeight:"100vh" , width:"50vw"}}
        src={banner}
        alt="bannerimg"
      />
    </div>
  )
}

export default LoginPage
