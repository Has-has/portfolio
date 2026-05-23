import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Hasan</h2>

      <div>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    backgroundColor: "#020617",
    alignItems: "center",
  },
  logo: {
    color: "#38bdf8",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Navbar;