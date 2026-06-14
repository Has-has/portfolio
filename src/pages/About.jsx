function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>About Me</h2>

      <p style={styles.text}>
        I’m a Software Engineering Technology graduate with a strong interest in
        full stack development and building modern web applications.
      </p>

      <p style={styles.text}>
        I have experience working in fast-paced environments where I supported
        and coordinated technology projects, while continuously improving my
        technical skills in React, Node.js, and API development.
      </p>

      <p style={styles.text}>
        I enjoy solving problems, learning new technologies, and creating
        clean, scalable solutions that provide real value.
      </p>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "100px 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "40px",
    marginBottom: "30px",
    color: "#111827",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#374151",
    marginBottom: "20px",
  },
};

export default About;