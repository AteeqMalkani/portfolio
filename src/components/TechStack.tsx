const technologies = [
  "NestJS",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "REST APIs",
  "JWT",
  "React",
  "React Native",
  "Expo",
  "Firebase",
  "Git",
  "GitHub",
];

function TechStack() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">TECHNOLOGIES</p>

          <h2>Tools I work with</h2>

          <p>
            Technologies I use to build and integrate backend systems and
            applications.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((technology) => (
            <div className="tech-item" key={technology}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
