import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
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

      {/* ===== ABOUT SECTION ===== */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>

        <p style={styles.text}>
          I am a Software Engineering Technology graduate with a strong
          interest in full stack development. I have experience working in
          fast-paced environments supporting and coordinating technology
          projects.
        </p>

        <p style={styles.text}>
          My technical skills include React, JavaScript, Node.js, and building
          APIs. I enjoy solving problems and creating applications that provide
          real value to users.
        </p>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>

        <p style={styles.text}>
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="mailto:your@email.com" className="button">
            Email Me
          </a>
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
    padding: "80px 10%",
    minHeight: "80vh",
    backgroundColor: "#f5efe6",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  smallText: {
    fontSize: "20px",
    color: "#64748b",
    marginBottom: "10px",
  },

  name: {
    fontSize: "80px",
    fontWeight: "700",
    margin: "0",
    color: "#111827",
  },

  role: {
    fontSize: "36px",
    fontWeight: "400",
    marginTop: "10px",
    color: "#374151",
  },

  link: {
    display: "inline-block",
    marginTop: "30px",
    fontSize: "18px",
    color: "#111827",
    textDecoration: "underline",
  },

  image: {
    width: "350px",
    height: "450px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  section: {
    padding: "80px 10%",
    backgroundColor: "#f8fafc",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#111827",
  },

  text: {
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
    color: "#374151",
  },
};

export default Home;