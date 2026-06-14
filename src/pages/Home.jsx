import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div style={styles.hero}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <p style={styles.smallText}>Hello, I’m</p>

        <h1 style={styles.name}>Hasan</h1>

        <h2 style={styles.role}>Full Stack Developer</h2>

        <a
          href="/resume.pdf" // later we can add real resume
          style={styles.link}
        >
          Download Resume
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <img src={profile} alt="Hasan" style={styles.image} />
      </div>
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
    backgroundColor: "#f8fafc",
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
    borderRadius: "10px",
  },
};

export default Home;