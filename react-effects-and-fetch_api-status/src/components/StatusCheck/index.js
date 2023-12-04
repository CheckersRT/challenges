import { useEffect, useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    handleCheckApiStatus();
  })


  async function handleCheckApiStatus() {
    try {
      console.log("click")
      setLoading(true);
      if (loading === true) {
        console.log("loading");
        setStatusIcon("⏳");
      } else null;
      
      const response = await fetch(apiStatusUrl);
      const answer = await response.json();
      
      if (response.ok) {
        setStatusIcon("✅");
      } else {
        setStatusIcon("❌");
      }
      setLoading(false);
      console.log(answer);
      
    } catch (error) {
      setStatusIcon("🚨")
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
