import { Link } from "react-router-dom";

export default function CompanyMapping() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/"
          className="text-primary hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-8 mb-6">
          Company Mapping
        </h1>

        <img
          src="src/assets/company-mapping.jpg"
          alt="Company Mapping"
          className="w-full rounded-2xl shadow-lg mb-8"
        />

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">

          <p>
            Company Mapping is a web-based system designed to monitor,
            verify, and manage company information efficiently.
          </p>

          <p>
            The system integrates interactive maps to display company locations
            and uses MySQL for data management.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Technologies Used
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>React Leaflet</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}