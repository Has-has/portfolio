import profile from "../assets/profile.jpg";
function About() {
  return (
    <section style={styles.container}>
      {/* LEFT IMAGE */}
      <div style={styles.left}>
        <img
          src={profile}
          alt="about"
          style={styles.image}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div style={styles.right}>
        <p style={styles.description}>
          I’m a Software Engineering Technology graduate with experience in
          building modern web applications and supporting technology projects
          in fast-paced environments.
        </p>

        {/* INFO */}
        <div style={styles.info}>
          <p><strong>Freelance:</strong> Available</p>
          <p><strong>Location:</strong> Canada</p>
          <p><strong>Focus:</strong> Full Stack Development</p>
        </div>

        {/* SKILLS */}
        <div style={styles.skills}>
          <h3>Skill</h3>

          <div style={styles.skillRow}>
            <span>React</span>
            <span>80%</span>
          </div>
          <div style={styles.bar}>
            <div style={{ ...styles.fill, width: "80%" }} />
          </div>

          <div style={styles.skillRow}>
            <span>Node.js</span>
            <span>75%</span>
          </div>
          <div style={styles.bar}>
            <div style={{ ...styles.fill, width: "75%" }} />
          </div>

          <div style={styles.skillRow}>
            <span>JavaScript</span>
            <span>85%</span>
          </div>
          <div style={styles.bar}>
            <div style={{ ...styles.fill, width: "85%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "80px",
    padding: "100px 10%",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  right: {
    flex: 1,
    minWidth: "300px",
  },

  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
  },

  description: {
    color: "#6b7280",
    lineHeight: "1.7",
    marginBottom: "20px",
  },

  info: {
    marginBottom: "30px",
    color: "#374151",
    lineHeight: "1.8",
  },

  skills: {
    marginTop: "20px",
  },

  skillRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginTop: "15px",
  },

  bar: {
    height: "4px",
    backgroundColor: "#e5e7eb",
    marginTop: "5px",
  },

  fill: {
    height: "100%",
    backgroundColor: "#111827",
  },
};

export default About;