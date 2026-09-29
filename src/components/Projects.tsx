const projects = [
  {
    number: "01",
    title: "Task Management API",
    description:
      "A REST API built with NestJS featuring JWT authentication, authorization, CRUD operations, DTO validation, password hashing, and Swagger API documentation.",
    technologies: ["NestJS", "Node.js", "TypeScript", "JWT", "Swagger"],
    github: "https://github.com/AteeqMalkani/nestjs-task-management-api",
  },
  {
    number: "02",
    title: "VoiAst",
    description:
      "An AI voice assistant application designed to interact through voice and help users perform everyday tasks such as taking notes and other actions.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "AI"],
    github: "https://github.com/AteeqMalkani/Ai-VoiAst",
  },
  {
    number: "03",
    title: "SpeakEasy AI",
    description:
      "A web application that converts written text into speech, with voice selection, speech controls, adjustable speed, theme support, and a responsive interface.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Web Speech API",
    ],
    github: "https://github.com/AteeqMalkani/SpeakEasy-AI",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">PROJECTS</p>

          <h2>Things I've built</h2>

          <p>
            A selection of projects that demonstrate my experience building
            APIs, applications, and useful software.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub ↗
                </a>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="technology-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
