import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

interface AppHeaderProps {
  onLogout: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onLogout }) => {
  const profileURL = localStorage.getItem("profilePic") || "./assets/default_profile.jpg";

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("profileURL");
        onLogout();
        alert("Logged Out"); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
  style={{
    borderRadius: "12px",
    background: "linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)", // Vibrant gradient
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    border: "1px solid #DDD",
    height: "80px",
    padding: "20px",
    margin: "20px",
    width: "calc(100% - 40px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div>
    <h1 style={{ color: "#FFFFFF", fontFamily: "'Roboto', sans-serif", fontSize: "24px", fontWeight: "500" }}>
      Welcome {localStorage.getItem("name")}
    </h1>
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={profileURL}
      alt={localStorage.getItem("name") || ""}
      style={{
        borderRadius: "50%",
        marginRight: "15px",
        border: "3px solid #FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        width: "50px", // Slightly larger for emphasis
        height: "50px",
      }}
    />
    <button
      style={{
        background: "#FF416C", 
        color: "white",
        padding: "10px 25px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Roboto', sans-serif",
        transition: "background 0.3s", 
      }}
      onMouseOver={(e) => {
        const target = e.target as HTMLButtonElement; // Asserting the target as an HTMLButtonElement
        target.style.background = "#FF4B2B";
      }}
      onMouseOut={(e) => {
        const target = e.target as HTMLButtonElement; // Asserting the target as an HTMLButtonElement
        target.style.background = "#FF416C";
      }}
      
      onClick={handleLogout}
    >
      Logout
    </button>
  </div>
</div>

  );
};

export default AppHeader;
