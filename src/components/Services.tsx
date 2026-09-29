function Services() {
  const services = [
    {
      number: "01",
      title: "API Development",
      description:
        "Build clean and structured REST APIs for web and mobile applications using NestJS and Node.js.",
    },
    {
      number: "02",
      title: "Backend Bug Fixes",
      description:
        "Find and fix backend errors, API issues, validation problems, and existing NestJS or Node.js bugs.",
    },
    {
      number: "03",
      title: "Authentication",
      description:
        "Implement login, registration, JWT authentication, protected routes, and authorization.",
    },
    {
      number: "04",
      title: "API Integration",
      description:
        "Connect React or React Native applications with backend APIs and handle data flow between them.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">SERVICES</p>
          <h2>What I can help you with</h2>
          <p>
            Practical backend development for small businesses, startups,
            developers, and project owners.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
