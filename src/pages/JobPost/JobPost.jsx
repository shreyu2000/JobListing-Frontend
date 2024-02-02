import React from 'react'
import JobPostForm from '../../components/JobPostForm/JobPostForm'
import banner2 from '../../assets/images/banner2.png'

const JobPost = () => {
  return (
    <div style={{display : "flex"}}>
      <JobPostForm/>
      <img 
        style={{maxHeight:"100vh" , width:"40vw"}}
        src={banner2}
        alt="bannerimg"
      />
    </div>
  )
}

export default JobPost
