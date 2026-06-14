import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
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

      {/* ABOUT SECTION */}
      <section style={styles.section}>
        <h2>About Me</h2>
        <p style={styles.text}>
          I am a Software Engineering Technology graduate focused on building
          modern full stack applications using React, Node.js, and APIs.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section style={styles.section}>
        <h2>Featured Projects</h2>
        <p style={styles.text}>
          Explore my work including full stack applications, APIs, and modern web interfaces.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section style={styles.section}>
        <h2>Contact</h2>
        <p style={styles.text}>
          Feel free to reach out for opportunities or collaboration.
        </p>
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
    backgroundColor: "#f5efe6",
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

  section: {
    padding: "100px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },

  text: {
    marginTop: "20px",
    lineHeight: "1.6",
    color: "#374151",
  },
};

export default Home;