import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  async function login(e) {
    e.preventDefault();
    const response = await fetch(
      "https://teacherportal-backend-r7my.onrender.com/login",
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/teacherPortalPage"} />;
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
      }}
    >
      <form action="" className="login" onSubmit={login}>
        <h1>Login</h1>
        
        <label htmlFor="username" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            marginTop: "5px",
            marginBottom: "10px",
            padding: "10px",
            border: "2px solid #ddd",
            fontSize: "1rem",
            backgroundColor: "#fff",
          }}
        />
        
        <label htmlFor="password" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Password</label>
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "2px solid #ddd",
              fontSize: "1rem",
              backgroundColor: "#fff",
              flex: "1",
            }}
          />
          <button
            id="togglePassword"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              backgroundColor: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#555",
              padding: "10px",
              border: "none", // Removed the border
              zIndex: "1",
              top: "25%", 
              transform: "translateY(-38.9%)" 
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          style={{
            display: "block",
            width: "50%",
            marginTop: "20px",
            marginBottom: "5px",
            padding: "10px",
            border: "2px solid #ddd",
            fontSize: "1.2rem",
            backgroundColor: "rgb(29, 122, 209)",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#fff",
            alignSelf: "center",
          }}
        >
          Login
        </button>
      </form>
      <div
        className="note"
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "black",
          padding: "10px",
          borderRadius: "5px",
          width: "300px",
          margin: "20px auto",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontFamily: "sans-serif",
          lineHeight: "1.5",
        }}
      >
        <p>Username:{"  test"}</p>
        <p>Password:{"  test"}</p>
      </div>
    </div>
  );
};
