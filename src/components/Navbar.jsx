import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* LEFT - LOGO */}
      <div style={styles.logo}>Hasan</div>

      {/* CENTER - MENU */}
      <div style={styles.menu}>
        <Link to="/" style={styles.link}>HOME</Link>
        <Link to="/about" style={styles.link}>ABOUT ME</Link>
        <Link to="/projects" style={styles.link}>PORTFOLIO</Link>
        <Link to="/contact" style={styles.link}>CONTACT</Link>
      </div>

      {/* RIGHT - ICONS */}
      <div style={styles.icons}>
        <a href="#" style={styles.icon}>in</a>
        <a href="#" style={styles.icon}>gh</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "relative",
    width: "100%",
    padding: "25px 60px",
    backgroundColor: #252421,
  },

  logo: {
    position: "absolute",
    left: "60px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
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
    fontWeight: "500",
  },

  icons: {
    position: "absolute",
    right: "60px",
    top: "50%",
    transform: "translateY(-50%)",
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