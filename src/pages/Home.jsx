function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Hi, I'm Hasan 👋</h1>

      <h2 style={{ color: "#38bdf8", marginTop: "10px" }}>
        Full Stack Developer
      </h2>

      <p style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.6" }}>
        I build modern web applications using React, Node.js, and JavaScript.
        Passionate about creating clean, scalable, and user-friendly solutions.
        Currently focused on building full-stack applications and improving my development skills.
      </p>

      <a
        href="/projects"
        style={{
          backgroundColor: "#38bdf8",
          color: "#000",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        View My Projects
      </a>
    </div>
  );
}

export default Home;