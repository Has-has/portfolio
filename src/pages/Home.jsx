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
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "120px 20px 80px",
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
    marginBottom: "10px",
  },

  name: {
  fontSize: "64px",
  fontWeight: "700",
  margin: "0",
  color: "#111827",
},

role: {
  fontSize: "28px",
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
    width: "100%",
    maxWidth: "320px",
    height: "auto",
    borderRadius: "12px",
  },
};

export default Home;