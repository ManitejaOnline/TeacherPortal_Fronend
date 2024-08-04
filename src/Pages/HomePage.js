import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <div style={{ width: "80%", maxWidth: "500px", textAlign: "center", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", backgroundColor: "white" }}>
        <p>Welcome to the Teacher Portal.</p>
        <br />
        <Link style={{ textDecoration: "none" }} to="/login">
          <Button id="login-btn" className="btn" variant="contained">
            Enter
          </Button>
        </Link>
        <br />
        <div
          className="note"
          style={{
            fontSize: "15px",
            color: "black",
            padding: "10px",
            borderRadius: "5px",
            margin: "20px auto",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            fontFamily: "sans-serif",
            overflow: "auto",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            lineHeight: "1.5",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>Username:{" test"}</p>
          <p>Password:{ " test"}</p>
        </div>
      </div>
    </div>
  );
};
