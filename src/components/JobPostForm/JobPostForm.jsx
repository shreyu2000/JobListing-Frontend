import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./JobPostForm.module.css";
import { createJobPost, updateJobPost } from "../../apis/job.js";

export default function JobPostForm() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const isEditExistingJobPost = useState(state?.edit || false)[0];
  const [formData, setFormData] = useState({
    companyName: state?.data?.companyName || "",
    logoUrl: state?.data?.logoUrl || "",
    jobPosition: state?.data?.jobPosition || "",
    monthlySalary: state?.data?.monthlySalary || "",
    jobType: state?.data?.jobType || "full-time",
    locationPreference: state?.data?.locationPreference || "remote",
    location: state?.data?.location || "",
    jobDescription: state?.data?.jobDescription || "",
    aboutComp: state?.data?.aboutComp || "",
    skillsRequired: state?.data?.skillsRequired || "",
    information: state?.data?.information || "",
    jobDuration: state?.data?.jobDuration || "",
    companySize: state?.data?.companySize || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Split skillsRequired into an array
      const updatedFormData = {
        ...formData,
        // skillsRequired: formData.skillsRequired.split(",").map(skill => skill.trim()),
        skillsRequired: typeof formData.skillsRequired === 'string' ? formData.skillsRequired.split(',').map(skill => skill.trim()) : formData.skillsRequired

      };

      if (isEditExistingJobPost) {
        if (!state.id) throw new Error("Invalid job ID");
        await updateJobPost(state.id, updatedFormData);
        alert("Job Updated");
      } else {
        await createJobPost(updatedFormData);
        alert("Job Created");
      }
      navigate(`/job-details/${state.id}`);
    } catch (error) {
      console.error("Error:", error);
      // Handle error - display message to the user
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        {isEditExistingJobPost ? <>Edit</> : <>Add</>} job description
      </h1>
      <div className={styles.jobForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="companyName">
            Company Name:
          </label>
          <input
            className={styles.input}
            type="text"
            name="companyName"
            value={formData?.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="logoURL">
            Logo URL:
          </label>
          <input
            className={styles.input}
            type="text"
            name="logoUrl"
            value={formData?.logoUrl}
            onChange={handleChange}
            placeholder="Enter logo URL"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="position">
            Job Position:
          </label>
          <input
            className={styles.input}
            type="text"
            name="jobPosition"
            value={formData?.jobPosition}
            onChange={handleChange}
            placeholder="Enter job position"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">
            Monthly Salary:
          </label>
          <input
            className={styles.input}
            type="text"
            name="monthlySalary"
            value={formData?.monthlySalary}
            onChange={handleChange}
            placeholder="Enter monthly salary"
          />
        </div>
        {/* job type  dropdown */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="jobType">
            Job Type:
          </label>
          <select
            className={styles.input}
            name="jobType"
            value={formData?.jobType}
            onChange={handleChange}
          >
            <option value="Full-time">Full Time</option>
            <option value="Part-time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        {/* dropdown select  */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="remoteOffice">
            Remote/Office:
          </label>
          <select
            className={styles.input}
            name="locationPreference"
            value={formData?.locationPreference}
            onChange={handleChange}
          >
            <option value="remote">Remote</option>
            <option value="office">Office</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">
            Location:
          </label>
          <input
            className={styles.input}
            type="text"
            name="location"
            value={formData?.location}
            onChange={handleChange}
            placeholder="Enter Location"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="jobDescription">
            Job Description:
          </label>
          <textarea
            className={styles.input}
            name="jobDescription"
            value={formData?.jobDescription}
            onChange={handleChange}
            placeholder="Type the job description"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="aboutCompany">
            About Company:
          </label>
          <textarea
            className={styles.input}
            name="aboutComp"
            value={formData?.aboutComp}
            onChange={handleChange}
            placeholder="Type about your company"
          />
        </div>
        {/* dropdown */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="skillsRequired">
            Skills Required (comma-separated):
          </label>
          <input
            className={styles.input}
            type="text"
            name="skillsRequired"
            value={formData?.skillsRequired}
            onChange={handleChange}
            placeholder="Enter skills separated by commas"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="addinfo">
            Information:
          </label>
          <textarea
            className={styles.input}
            name="information"
            value={formData?.information}
            onChange={handleChange}
            placeholder="Enter additional information"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">
            Job Duration
          </label>
          <input
            className={styles.input}
            type="text"
            name="jobDuration"
            value={formData?.jobDuration}
            onChange={handleChange}
            placeholder="Enter job duration"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">
            Company Size
          </label>
          <input
            className={styles.input}
            type="number"
            name="companySize"
            value={formData?.companySize}
            onChange={handleChange}
            placeholder="Enter Company Size"
          />
        </div>
      </div>
      <button type="button" onClick={() => navigate(`/job-details/${state.id}`)} className={styles.cancel}>
          Cancel
        </button>
        <button type="submit" className={styles.add}  onClick={handleSubmit}>
          {isEditExistingJobPost ? "Edit Job" : "+ Add Job"}
        </button>
    </div>
  );
}
