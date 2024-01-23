import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CardMenu = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      console.log("Fetching users...");
      const response = await axios.get("http://localhost:3000/telegram/users");
      setUserCount(response.data.length);
      console.log(response.data.length);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const cardStyle = {
    borderRadius: "50%", // Circular shape
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    margin: "20px",
    padding: "40px", // Increased padding for circular design
    width: "250px", // Adjusted for circular shape
    height: "250px", // Adjusted for circular shape
    background: "linear-gradient(145deg, #81E6D9, #805AD5)",
    color: "#FFF",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease-in-out",
    textAlign: "center", // Centered text
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
      <Link to="/manage-users" style={{ ...cardStyle as React.CSSProperties, textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>

      {/* <Link to="/manage-users" style={{ ...cardStyle, textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}> */}
        <div>
          <h2>Manage Users</h2>
          <hr />
          <p>Manage subscribers of your app</p>
        </div>
      </Link>

      {/* <Link to="/bot-settings" style={{ ...cardStyle, textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}> */}
      <Link 
  to="/bot-settings" 
  style={{ ...cardStyle as React.CSSProperties, textDecoration: "none" }} 
  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")} 
  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
        <div>
          <h2>Bot Settings</h2>
          <hr />
          <p>Configure Bot settings of your app</p>
        </div>
      </Link>

      {/* <div style={{ ...cardStyle, background: "linear-gradient(145deg, #F6E05E, #DD6B20)" }}> */}
      <div 
  style={{ 
    ...(cardStyle as React.CSSProperties), 
    background: "linear-gradient(145deg, #F6E05E, #DD6B20)" 
  }}
>
        <div>
          <h2>Statistics</h2>
          <hr />
          <div>
            <p>Total Users</p>
            <strong>{userCount}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
