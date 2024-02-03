import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJobDetails } from "../../apis/job";
import styles from "./JobDetails.module.css";

const JobDetails = ({}) => {
    const navigate = useNavigate();
    const [data, setData] = useState(true);

    // useEffect(() => {
    //     fetchJobDetailsById();
    // }, []);

    // const fetchJobDetailsById = async () => {
    //     const jobId = window.location.pathname?.split("/").slice(-1)[0];
    //     if (!jobId) return;
    //     const response = await getJobDetails(jobId);
    //     setData(response);
    // };

    return (
        <>
            {data ? (
                <>
                    <div className={styles.container}>
                        <p className={styles.containerText}>
                            {/* {data?.companyName} */}companyName
                        </p>
                    </div>
                    <div className={styles.containerBottom}>
                        <div className={styles.preHeading}>
                            <p className={styles.lightText}>{"data.jobType"}</p>
                        </div>
                        <div className={styles.heading}>
                            <div>
                                <p className={styles.boldText}>{data.title}</p>
                                <p className={styles.locationText}>
                                    {"data.location"}
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
                                <p className={styles.lightText}>Stipend</p>
                                <p className={styles.lightText}>
                                    {"data.salary"}
                                </p>
                            </div>
                            <div>
                                <p className={styles.lightText}>Duration</p>
                                <p className={styles.lightText}>6 Months</p>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h2>About Company</h2>
                            <p>{"data.about"}</p>
                        </div>
                        <div className={styles.info}>
                            <h2>Skill(s) Required</h2>
                            {/* {data.skillsRequired.map((skill) => {
                                return (
                                    <span className={styles.skill} key={skill}>
                                        {skill}
                                    </span>
                                );
                            })} */}
                        </div>
                        <div className={styles.info}>
                            <h2>About the job/internship</h2>
                            <p>{"data.description"}</p>
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