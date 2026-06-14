import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.smallText}>Hello, I’m</p>
          <h1 style={styles.name}>Hasan</h1>
          <h2 style={styles.role}>Full Stack Developer</h2>

          <a href="/resume.pdf" style={styles.link}>
            Download Resume
          </a>
        </div>

        <div style={styles.right}>
          <img src={profile} alt="Hasan" style={styles.image} />
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={styles.projectsSection}>
        <h2 style={styles.projectsTitle}>My Projects</h2>
        <p style={styles.projectsSubtitle}>
          A selection of my recent work in full stack development.
        </p>

        <div style={styles.grid}>
          {/* Project 1 */}
          <div
            style={styles.projectItem}
            onMouseOver={(e) => {
              e.currentTarget.querySelector(".overlay").style.opacity = 1;
              e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector(".overlay").style.opacity = 0;
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Portfolio"
              style={styles.projectImage}
            />
            <div className="overlay" style={styles.overlay}>
              <h3>Portfolio Website</h3>
              <p>React</p>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={styles.projectItem}
            onMouseOver={(e) => {
              e.currentTarget.querySelector(".overlay").style.opacity = 1;
              e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector(".overlay").style.opacity = 0;
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="API"
              style={styles.projectImage}
            />
            <div className="overlay" style={styles.overlay}>
              <h3>REST API</h3>
              <p>Node.js</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    minHeight: "90vh",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 40px",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "300px",
  },

  smallText: {
    fontSize: "20px",
    color: "#64748b",
  },

  name: {
    fontSize: "70px",
    margin: "10px 0",
    color: "#111827",
  },

  role: {
    fontSize: "30px",
    color: "#374151",
  },

  link: {
    display: "inline-block",
    marginTop: "25px",
    fontSize: "18px",
    textDecoration: "underline",
    color: "#111827",
  },

  image: {
    width: "100%",
    maxWidth: "320px",
    borderRadius: "12px",
  },

  /* PROJECTS */
  projectsSection: {
    padding: "100px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },

  projectsTitle: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  projectsSubtitle: {
    color: "#6b7280",
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },

  projectItem: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    cursor: "pointer",
  },

  projectImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "0.3s",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    padding: "20px",
    opacity: 0,
    transition: "0.3s",
  },
};

export default Home;