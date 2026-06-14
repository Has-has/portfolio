function Projects() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>My Projects</h1>

      <div style={styles.container}>
        {/* Project 1 */}
        <div style={styles.card}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
          <h3>Portfolio Website</h3>
          <p>Built using React, JavaScript, HTML, and CSS.</p>
          <a   href="portfolio-rln9zct1r-hasan-abulaban-s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
             display: "inline-block",
             marginTop: "10px",
             color: "#38bdf8"
            }}
          >
            Live Demo
          </a>
        </div>

        {/* Project 2 */}
        <div style={styles.card}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
          <h3>REST API</h3>
          <p>Backend API built with Node.js and Express.</p>
          <a   href="https://github.com/yourusername/rest-api" target="_blank" rel="noopener noreferrer" style={{
             display: "inline-block",
             marginTop: "10px",
             color: "#38bdf8"
            }}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
  backgroundColor: "#020617",
  padding: "20px",
  borderRadius: "10px",
  width: "250px",
  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  transition: "0.3s",
  },
};

export default Projects;