function Projects() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>My Projects</h1>

      {/* ⭐ Featured Project */}
      <div style={styles.featured}>
        <h2>Featured Project</h2>

        <h3 style={{ marginTop: "10px" }}>Portfolio Website</h3>

        <p style={styles.description}>
          A responsive personal portfolio built with React to showcase
          projects, skills, and experience. Includes routing, reusable
          components, and deployment using Vercel.
        </p>

        <div style={styles.techStack}>
          <span style={styles.tag}>React</span>
          <span style={styles.tag}>JavaScript</span>
          <span style={styles.tag}>CSS</span>
        </div>

        <div style={styles.buttonGroup}>
          <a
            href="https://github.com/Has-has/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            View Code
          </a>

          <a
            href="https://portfolio-lrn9zct1r-hasan-abulaban-s-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonSecondary}
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Other Projects */}
      <h2 style={{ marginTop: "50px" }}>Other Projects</h2>

      <div style={styles.container}>
        <div style={styles.card}>
          <h3>REST API</h3>

          <p style={styles.description}>
            A RESTful API built with Node.js and Express, supporting CRUD
            operations and scalable backend architecture.
          </p>

          <div style={styles.techStack}>
            <span style={styles.tag}>Node.js</span>
            <span style={styles.tag}>Express</span>
            <span style={styles.tag}>API</span>
          </div>

          <div style={styles.buttonGroup}>
            <a
              href="https://github.com/yourusername/rest-api"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "60px 20px",
    textAlign: "center",
  },

  title: {
    marginBottom: "40px",
    fontSize: "2.5rem",
  },

  container: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    backgroundColor: "#020617",
    padding: "25px",
    borderRadius: "15px",
    width: "300px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    transition: "all 0.3s ease",
    textAlign: "left",
  },

  description: {
    marginTop: "10px",
    lineHeight: "1.5",
    color: "#cbd5f5",
  },

  techStack: {
    marginTop: "15px",
    marginBottom: "15px",
  },

  tag: {
    display: "inline-block",
    backgroundColor: "#0f172a",
    color: "#38bdf8",
    padding: "5px 10px",
    borderRadius: "5px",
    marginRight: "8px",
    fontSize: "0.8rem",
  },

  buttonGroup: {
    marginTop: "10px",
  },

  button: {
    backgroundColor: "#38bdf8",
    color: "#000",
    padding: "8px 14px",
    borderRadius: "6px",
    textDecoration: "none",
    marginRight: "10px",
    fontWeight: "500",
    transition: "0.2s",
  },

  buttonSecondary: {
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    padding: "8px 14px",
    borderRadius: "6px",
    textDecoration: "none",
  },

  featured: {
  background: "linear-gradient(135deg, #020617, #0f172a)",
  padding: "30px",
  borderRadius: "20px",
  maxWidth: "800px",
  margin: "auto",
  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
  textAlign: "left",
},

wrapper: {
  padding: "60px 20px",
  textAlign: "center",
},

title: {
  fontSize: "2.5rem",
  marginBottom: "40px",
},

container: {
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
},

card: {
  backgroundColor: "#020617",
  padding: "25px",
  borderRadius: "15px",
  width: "300px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
},

description: {
  marginTop: "10px",
  lineHeight: "1.5",
  color: "#cbd5f5",
},

techStack: {
  marginTop: "15px",
  marginBottom: "15px",
},

tag: {
  display: "inline-block",
  backgroundColor: "#0f172a",
  color: "#38bdf8",
  padding: "5px 10px",
  borderRadius: "5px",
  marginRight: "8px",
  fontSize: "0.8rem",
},

buttonGroup: {
  marginTop: "10px",
},

button: {
  backgroundColor: "#38bdf8",
  color: "#000",
  padding: "8px 14px",
  borderRadius: "6px",
  textDecoration: "none",
  marginRight: "10px",
  fontWeight: "500",
},

buttonSecondary: {
  border: "1px solid #38bdf8",
  color: "#38bdf8",
  padding: "8px 14px",
  borderRadius: "6px",
  textDecoration: "none",
},
};

export default Projects;