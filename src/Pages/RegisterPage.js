import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate } from "react-router-dom";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  async function register(e) {
    e.preventDefault();
    const response = await fetch(
      "https://teacherportal-backend-r7my.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          fullName,
          email,
          phone,
          age,
        }),
      }
    );
    if (response.status === 200) {
      alert("Registration successful");
      <Navigate to="/login" />;
    } else {
      alert("Registration failed");
    }
    setUsername("");
    setPassword("");
    setFullName("");
    setEmail("");
    setPhone("");
    setAge("");
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <div style={{ width: "80%", maxWidth: "500px", textAlign: "center", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", backgroundColor: "white" }}>
        <form className="register" onSubmit={register}>
          <h1>Register</h1>
          <input
            type="text"
            name="fullName"
            id="fullName"
            maxLength="20"
            minLength="3"
            required
            autoFocus
            title="Full Name may only contain letters with a length between 3 and 20"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            minLength="10"
            maxLength="10"
            pattern="[0-9]{10}"
            required
            title="Phone may only contain numbers without country code"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="number"
            name="age"
            id="age"
            required
            placeholder="Age"
            title="Age may only contain numbers between 18 and 100"
            min="18"
            max="100"
            step="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            name="username"
            id="username"
            maxLength="20"
            minLength="3"
            title="Username should be unique with a length between 3 and 20"
            required
            autoFocus
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div style={{ position: "relative", display: "flex", alignItems: "center", marginTop: "10px" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              minLength="8"
              maxLength="20"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
              title="Password should contain at least one uppercase letter, one lowercase letter, one number and one special character with a length between 8 and 20"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", paddingRight: "40px" }}
            />
            <button
              id="togglePassword"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "1px",
                top: "30%",
                transform: "translateY(-32%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit" style={{ marginTop: "20px" }}>Register</button>
        </form>
      </div>
    </div>
  );
};
