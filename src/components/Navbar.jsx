import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        Hasan
      </div>

      <div style={styles.menu}>
        <Link to="/" style={styles.link}>HOME</Link>
        <Link to="/about" style={styles.link}>ABOUT ME</Link>
        <Link to="/projects" style={styles.link}>PORTFOLIO</Link>
        <Link to="/contact" style={styles.link}>CONTACT</Link>
      </div>

      <div style={styles.icons}>
        <a href="https://linkedin.com" style={styles.icon}>in</a>
        <a href="https://github.com" style={styles.icon}>gh</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "25px 60px",

    backgroundColor: "#f5efe6",

    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
  },

  menu: {
    display: "flex",
    gap: "50px",
  },

  link: {
    textDecoration: "none",
    color: "#374151",

    fontSize: "14px",
    letterSpacing: "1px",
    fontWeight: "500",
  },

  icons: {
    display: "flex",
    gap: "20px",
  },

  icon: {
    textDecoration: "none",
    color: "#374151",
    fontWeight: "600",
  },
};

export default Navbar;