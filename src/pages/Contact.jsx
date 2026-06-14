function Contact() {
  return (
    <section style={styles.container}>
      {/* LEFT SIDE - FORM */}
      <div style={styles.left}>
        <h2 style={styles.title}>Contact Form</h2>

        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>

          <button type="submit" style={styles.button}>
            Send
          </button>
        </form>

        {/* QUICK CONTACT */}
        <div style={styles.quick}>
          <h3>Quick Contact</h3>
          <p><strong>Phone:</strong> +1 647 606 8671</p>
          <p><strong>Email:</strong> hasanabulaban92@gmail.com</p>
          <p><strong>Location:</strong> Canada</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <h2 style={styles.title}>24/7 Anytime</h2>

        <p style={styles.text}>
          Feel free to reach out anytime. I’m always open to discussing new
          opportunities, collaborations, or projects.
        </p>

        {/* MAP */}
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Canada&t=&z=5&ie=UTF8&iwloc=&output=embed"
          style={styles.map}
        />
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "80px",
    padding: "100px 10%",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    minWidth: "300px",
  },

  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#111827",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  input: {
    border: "none",
    borderBottom: "1px solid #ccc",
    padding: "10px 5px",
    fontSize: "16px",
    background: "transparent",
    outline: "none",
  },

  textarea: {
    border: "none",
    borderBottom: "1px solid #ccc",
    padding: "10px 5px",
    fontSize: "16px",
    height: "80px",
    resize: "none",
    background: "transparent",
    outline: "none",
  },

  button: {
    marginTop: "10px",
    background: "none",
    border: "none",
    borderBottom: "1px solid #000",
    width: "fit-content",
    cursor: "pointer",
    paddingBottom: "5px",
    fontSize: "14px",
  },

  quick: {
    marginTop: "40px",
    lineHeight: "1.8",
    color: "#374151",
  },

  text: {
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "20px",
  },

  map: {
    width: "100%",
    height: "250px",
    border: "none",
  },
};

export default Contact;