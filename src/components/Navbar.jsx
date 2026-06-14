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
    </nav>
  );
}

const styles = {
  nav: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "25px 10%",
    backgroundColor: "transparent",
    zIndex: 1000,
  },

  logo: {
    fontWeight: "600",
    fontSize: "20px",
    color: "#111827",
  },

  links: {
    display: "flex",
    gap: "30px",
  },

  link: {
    color: "#111827",
    textDecoration: "none",
    fontSize: "15px",
  },
};

export default Navbar;