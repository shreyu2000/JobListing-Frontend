import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router";
import {registerUser} from '../../apis/auth.js'
 
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!data.name || !data.mobile || !data.email || !data.password) {
      alert("Please fill in all fields.");
      return;
    }
    const response = await registerUser({ ...data });
    if (response) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("userName", response.name);
      navigate("/");
    }
  };

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Create an account</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="name"
        value={data.name}
        onChange={handleChange}
        type={"text"}
        placeholder="Name"
      ></input>
      <input
        className={styles.input}
        name="email"
        value={data.email}
        onChange={handleChange}
        type={"email"}
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="mobile"
        value={data.mobile}
        onChange={handleChange}
        type={"tel"}
        placeholder="Mobile"
      ></input>
      <input
        className={styles.input}
        name="password"
        value={data.password}
        onChange={handleChange}
        type={"password"}
        placeholder="Password"
      ></input>

      <div className={styles.agree}>
        <input type="checkbox" name="agreement" id="" />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
      <button onClick={handleSubmit} className={styles.button}>
        Create Account
      </button>
      {/* <Button>Create account</Button> */}
      <p className={styles.footer}>
        Already have an account?
        <span className={styles.underline} onClick={redirectToLoginPage}>
          Sign in
        </span>
      </p>
    </div>
  );
};

export default Register;
