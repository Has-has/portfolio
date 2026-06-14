function About() {
  return (
    <div style={styles.container}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h1>About Me</h1>

        <p style={styles.text}>
          I am a Software Engineering Technology graduate with a strong
          interest in full stack development. I have experience working in
          fast-paced environments supporting and coordinating technology projects.
        </p>

        <p style={styles.text}>
          I enjoy building modern web applications using React, Node.js, and APIs,
          and continuously improving my skills to grow as a developer.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <h2>Skills</h2>

        <div style={styles.skills}>
          <span style={styles.tag}>React</span>
          <span style={styles.tag}>JavaScript</span>
          <span style={styles.tag}>Node.js</span>
          <span style={styles.tag}>Express</span>
          <span style={styles.tag}>HTML</span>
          <span style={styles.tag}>CSS</span>
          <span style={styles.tag}>Git</span>
          <span style={styles.tag}>MongoDB</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "60px",
    padding: "100px 10%",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },

  left: {
    flex: 2,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    minWidth: "250px",
  },

  text: {
    marginTop: "20px",
    lineHeight: "1.6",
    color: "#374151",
  },

  skills: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  tag: {
    backgroundColor: "#e5e7eb",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "14px",
  },
};

export default About;