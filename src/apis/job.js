import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;


export const getAllJobs  = ({skills , position})=>{
    try {
    const reqUrl = `${backendUrl}/job/all?skills=${skills}&position=${position}`;
    
    const response = axios.get(reqUrl)
    console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

export const getJobDetails = ({jobId})=>{
    try {

    const reqUrl = `${backendUrl}/job/job-description/${jobId}`;
    
    const response = axios.get(reqUrl)
    console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}



