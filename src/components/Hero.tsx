function Hero() {
  return (
    <section className="hero">
      <div className="container hero-wrapper">
        <div className="hero-content">
          <p className="hero-label">NESTJS / NODE.JS BACKEND DEVELOPER</p>

          <h1>
            I build reliable
            <br />
            <span>backend APIs</span>
          </h1>

          <p className="hero-description">
            I build, fix, and improve REST APIs and backend features for web and
            mobile applications.
          </p>

          <p className="hero-price">
            Small backend tasks starting from <strong>PKR 2,000</strong>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="api-visual">
          <div className="api-window">
            <div className="api-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="api-title">api.ts</span>
            </div>

            <div className="api-body">
              <div className="code-line">
                <span className="code-number">01</span>
                <span>
                  <span className="keyword">const</span>{" "}
                  <span className="variable">api</span> ={" "}
                  <span className="function">NestFactory</span>
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">02</span>
                <span>
                  <span className="variable">app</span>.
                  <span className="function">listen</span>(
                  <span className="string">3000</span>)
                </span>
              </div>

              <div className="code-line">
                <span className="code-number">03</span>
                <span></span>
              </div>

              <div className="api-request">
                <div>
                  <span className="method">GET</span>
                  <span>/api/tasks</span>
                </div>

                <span className="status">200 OK</span>
              </div>

              <div className="api-request">
                <div>
                  <span className="method post">POST</span>
                  <span>/api/auth/login</span>
                </div>

                <span className="status">201 OK</span>
              </div>

              <div className="api-request">
                <div>
                  <span className="method">GET</span>
                  <span>/api/users</span>
                </div>

                <span className="status">200 OK</span>
              </div>

              <div className="api-footer">
                <span className="pulse-dot"></span>
                API running on port 3000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
