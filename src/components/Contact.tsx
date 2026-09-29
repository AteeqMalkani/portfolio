function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="section-heading">
            <p className="section-label">CONTACT</p>

            <h2>Have a backend task?</h2>

            <p>
              Tell me what you are building, what is not working, or what you
              need added. I&apos;ll take a look at the requirements and we can
              discuss the next step.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:immalkani@outlook.com" className="contact-item">
              <div>
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">immalkani@outlook.com</span>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://github.com/AteeqMalkani"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div>
                <span className="contact-label">GITHUB</span>
                <span className="contact-value">github.com/AteeqMalkani</span>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ateeq-malkani-107997412/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div>
                <span className="contact-label">LINKEDIN</span>
                <span className="contact-value">
                  linkedin.com/in/ateeq-malkani-107997412
                </span>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://wa.me/923422979597"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div>
                <span className="contact-label">WHATSAPP</span>
                <span className="contact-value">+92 342 2979597</span>
              </div>

              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
