import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
  <div style={styles.inner}>
    <h2 style={styles.logo}>Hasan</h2>

    <div style={styles.links}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/projects" style={styles.link}>Portfolio</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </div>
  </div>
</nav>
  );
}

const styles = {
  nav: {
  width: "100%",
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  position: "sticky",
  top: 0,
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

  inner: {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
},
};

export default Navbar;