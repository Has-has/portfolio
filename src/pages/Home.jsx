import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ fontSize: "48px" }}>
        Hi, I'm Hasan 👋
      </h1>

      <h2 style={{ color: "#38bdf8" }}>
        Full Stack Developer
      </h2>

      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        I build modern web applications using React, JavaScript, and Node.js.
        Passionate about creating clean, efficient, and user-friendly solutions.
      </p>

      <Link to="/projects">
  <button
    style={{
      padding: "10px 20px",
      backgroundColor: "#38bdf8",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    View My Projects
  </button>
</Link>
    </div>
  );
}

export default Home;