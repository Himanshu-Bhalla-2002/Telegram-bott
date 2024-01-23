import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import CardMenu from "./components/CardMenu";
import ManageUsers from "./components/ManageUsers";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import BotSettings from "./components/BotSettings";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  console.log(authenticated);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    console.log("Logged in");
    setAuthenticated(true);
    localStorage.setItem("authenticated", "true");
  };

  // Function to handle logout
  const handleLogoutClick = () => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  useEffect(() => {
    const storedAuthenticated = localStorage.getItem("authenticated");
    if (storedAuthenticated === "true") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <div className="app-container">
      {authenticated ? (
        <>
          <div className="nav-bar">
            <AppHeader onLogout={handleLogoutClick} />
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<CardMenu />}></Route>
              <Route path="/manage-users" element={<ManageUsers />}></Route>
              <Route path="/bot-settings" element={<BotSettings />}></Route>
            </Routes>
          </div>
        </>
      ) : (
        <Login onLoginSuccess={() => handleLoginSuccess()} />
      )}
    </div>
  );
}

export default App;
