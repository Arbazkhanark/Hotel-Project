import React, { useState } from "react";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import "./design.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !cpassword) {
      alert("Please fill all details");
      return;
    }
    const newValue = {
      name: name,
      email: email,
      password: password,
      confirmPassword: cpassword,
    };

    try {
      const response = await axios.post("/register", newValue);
      if (response.data.success) {
        alert("Registration Successful");
      } else {
        alert("error");
      }
    } catch (err) {}
  };
  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>
              Don't have an account? Create your account, it takes less than a
              minute.
            </p>
            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />

              <button type="submit" className="primary-btn">
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
