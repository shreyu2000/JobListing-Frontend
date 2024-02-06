import axios from "axios";
const backendUrl =  "http://localhost:4000/api/v1";

export const getAllJobs = ({ skills, position }) => {
  try {
    const reqUrl = `${backendUrl}/job/all?skills=${skills}&position=${position}`;
    const response = axios.get(reqUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getJobDetails =async (jobId) => {
  try {
    const reqUrl = `${backendUrl}/job/job-description/${jobId}`;
    const response =await axios.get(reqUrl);
    return response.data?.data;    
  } catch (error) {
    console.log(error);
  }
};

export const createJobPost = async ({
  companyName,
  logoUrl,
  jobPosition,
  monthlySalary,
  jobType,
  locationPreference,
  location,
  jobDescription,
  aboutComp,
  companySize,
  jobDuration,
  skillsRequired,
  information,
}) => {
  try {
    const reqUrl = `${backendUrl}/job/createJob`;
    const reqPayload = {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      locationPreference,
      location,
      jobDescription,
      aboutComp,
      companySize,
      jobDuration,
      skillsRequired,
      information,
    };

    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.post(reqUrl, reqPayload);
    return response.data;
  } catch (error) {
    console.log(error);
    // toast with custom message for clients
  }
};

export const updateJobPost = async (
  jobId,
  {
    companyName,
    logoUrl,
    jobPosition,
    monthlySalary,
    jobType,
    locationPreference,
    location,
    jobDescription,
    aboutComp,
    companySize,
    jobDuration,
    skillsRequired,
    information,
  }
) => {
  try {
    const reqUrl = `${backendUrl}/job/edit/${jobId}`;
    const reqPayload = {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      locationPreference,
      location,
      jobDescription,
      aboutComp,
      companySize,
      jobDuration,
      skillsRequired,
      information,
    };
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(reqUrl, reqPayload);
    return response;
  } catch (error) {
    console.log(error);
    // toast with custom message for clients
  }
};
