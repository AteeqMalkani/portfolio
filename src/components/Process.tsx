const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I understand the requirements, existing code, and the exact problem that needs to be solved.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "For existing projects, I review the relevant backend code and identify the cause of the issue.",
  },
  {
    number: "03",
    title: "Build / Fix",
    description:
      "I implement the required feature or fix while keeping the code clean and maintainable.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "I test the API and make sure the requested functionality works as expected.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "I provide the completed work and explain anything the client needs to know.",
  },
];

function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">PROCESS</p>

          <h2>How I work</h2>

          <p>
            A simple process to keep the work clear from requirements to
            delivery.
          </p>
        </div>

        <div className="process-list">
          {steps.map((step) => (
            <div className="process-item" key={step.number}>
              <span className="process-number">{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
