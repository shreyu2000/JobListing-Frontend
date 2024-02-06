import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJobDetails } from "../../apis/job.js";
import styles from "./JobDetails.module.css";
import money_icon from '../../assets/icons/ph_money-fill.png';
import calender from '../../assets/icons/uis_calender.png'

const JobDetails = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null); // Initialize data state with null

    useEffect(() => {
        fetchJobDetailsById();
     
    }, []);

    const fetchJobDetailsById = async () => {
        try {
            const jobId = window.location.pathname?.split("/").slice(-1)[0];
            if (!jobId) return;
            const response = await getJobDetails(jobId);
            setData(response);
           
        } catch (error) {
            console.error("Error fetching job details:", error);
            // Handle error - display message to the user or log it for debugging
        }
    };

    return (
        <>
            {data ? (
                <>
                    <div className={styles.container}>
                        <p className={styles.containerText}>
                            {data?.companyName}
                        </p>
                    </div>

                    <div className={styles.containerBottom}>
                    <div className={styles.contentcontainer}>
                        <div className={styles.preHeading}>
                            <p>1 week ago</p>
                            <p className={styles.lightText}>{data.jobType}</p>
                        </div>

                        <div className={styles.heading}>
                            <div>
                                <p className={styles.boldText}>{data?.jobPosition}</p>
                                <p className={styles.locationText}>
                                    {data.location} | India
                                </p>
                            </div>

                            <div>
                                <button
                                    onClick={() => {
                                        navigate("/job-post", {
                                            state: {
                                                id: data._id,
                                                data: data,
                                                edit: true,
                                            },
                                        });
                                    }}
                                    className={styles.edit}
                                >
                                    Edit Job
                                </button>
                            </div>
                        </div>
                        <div className={styles.perks}>
                            <div>
                                <p className={styles.lightText} style={{display :"flex"}}><img src={money_icon} style={{width :"20px" ,marginRight:"5px" }}/>Stipend</p>
                                <p>
                                   Rs{data.monthlySalary}/month
                                </p>
                            </div>
                            <div>
                                <p className={styles.lightText} style={{display :"flex"}}> <img src={calender} style={{width :"20px" ,marginRight:"5px" }}/>Duration</p>
                                <p>{data.jobDuration}</p>
                            </div>

                        </div>
                        <div className={styles.info}>
                            <h2>About Company</h2>
                            <p>{data.aboutComp}</p>
                        </div>
                        <div className={styles.info}>
                            <h2>About the job/internship</h2>
                            <p>{data.jobDescription}</p>
                        </div>
                        <div className={styles.info}>
                            <h2>Skill(s) Required</h2>
                            {data.skillsRequired.map((skill ,i) => {
                                return (
                                    <span className={styles.skill} key={i}>
                                        {skill}
                                    </span>
                                );
                            })}

                        </div>
                        <div className={styles.info}>
                            <h2>Additional Information</h2>
                            <p>{data?.information}</p>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default JobDetails;