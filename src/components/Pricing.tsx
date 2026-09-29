const packages = [
  {
    name: "Basic Task",
    price: "PKR 2,000+",
    description: "For small, clearly defined backend tasks.",
    features: [
      "Small bug fixes",
      "Single API endpoint",
      "Validation fixes",
      "Minor backend changes",
    ],
  },
  {
    name: "Standard Task",
    price: "PKR 3,500+",
    description: "For a complete backend feature or small module.",
    features: [
      "CRUD functionality",
      "Authentication features",
      "New API module",
      "Swagger documentation",
      "API integration",
    ],
  },
  {
    name: "Advanced Task",
    price: "PKR 5,000+",
    description: "For larger backend work with multiple requirements.",
    features: [
      "Multiple API endpoints",
      "Complete authentication flow",
      "Multiple backend features",
      "React / React Native integration",
      "Larger existing-project changes",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">PRICING</p>

          <h2>Simple, clear pricing</h2>

          <p>
            Starting prices for common backend tasks. The final price depends on
            the requirements and complexity of the work.
          </p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg) => (
            <div className="pricing-card" key={pkg.name}>
              <h3>{pkg.name}</h3>

              <div className="price">{pkg.price}</div>

              <p className="pricing-description">{pkg.description}</p>

              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="pricing-button">
                Discuss a Task
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          Need something different? Send me the requirements and I will provide
          a price based on the actual scope.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
