import { useState } from "react";
import axios from "axios";

const BotSettings = () => {
  const botToken = "6859238265:AAHPtls32MIzTXu174GNeGwPcpBE4IH2bC8";
  const baseURL = `https://api.telegram.org/bot${botToken}`;
  const [botName, setBotName] = useState("");
  const [desc, setDesc] = useState("");
  const [shortDesc, setShortDesc] = useState("");

  const handleSubmit = (type: string) => {
    let data = {};
    let url = "";

    switch (type) {
      case "name":
        if (!botName) {
          alert("Name can't be empty");
          return;
        }
        data = { name: botName };
        url = `${baseURL}/setMyName`;
        break;
      case "desc":
        data = { description: desc };
        url = `${baseURL}/setMyDescription`;
        break;
      case "shortDesc":
        data = { short_description: shortDesc };
        url = `${baseURL}/setMyShortDescription`;
        break;
      default:
        return;
    }

    axios
      .post(url, data)
      .then((response) => {
        if (response.data.ok) {
          setBotName("");
          setDesc("");
          setShortDesc("");
          alert("Update Successful");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Update Failed");
      });
  };

  const inputStyle = {
    flexGrow: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background 0.2s",
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div
        style={{
          borderRadius: "12px",
          background: "linear-gradient(to right, #6DD5FA, #FF758C)",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
          padding: "30px",
          color: "#FFF",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Change Bot Name</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              style={inputStyle}
            />
            <button
              onClick={() => handleSubmit("name")}
              style={buttonStyle}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement; 
                target.style.background = "#45A049";
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement; 
                target.style.background = "#4CAF50";
              }}
              
            >
              Submit
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Change Bot Info</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              style={inputStyle}
            />
            <button
              onClick={() => handleSubmit("shortDesc")}
              style={buttonStyle}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement; 
                target.style.background = "#45A049";
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement; 
                target.style.background = "#4CAF50";
              }}
              
            >
              Submit
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Change Bot Description</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              style={inputStyle}
            />
            <button
              onClick={() => handleSubmit("desc")}
              style={buttonStyle}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement; 
                target.style.background = "#45A049";
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement; 
                target.style.background = "#4CAF50";
              }}
              
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSettings;
