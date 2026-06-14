import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <h2 style={styles.logo}>Hasan</h2>

      {/* Links */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Portfolio</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>

      {/* LinkedIn ONLY */}
      <div>
        <a
          href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.linkedin}
        >
          in
        </a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "relative",
    width: "100%",
    padding: "25px 60px",
    backgroundColor: "#f1f1ef",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },

  logo: {
    position: "absolute",
    left: "60px",
    top: "50%",
    transform: "translateY(-50%)",
    fontWeight: "600",
  },

  menu: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
  },

  link: {
    textDecoration: "none",
    color: "#374151",
    fontSize: "13px",
    letterSpacing: "1.5px",
  },

  icons: {
    position: "absolute",
    right: "60px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;