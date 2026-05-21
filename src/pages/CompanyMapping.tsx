import { Link } from "react-router-dom";
import reactLogo from "../assets/logos/React.png";
import tailwindLogo from "../assets/logos/Tailwind_CSS.png";
import expressjsLogo from "../assets/logos/Expressjs.png";
import mysqlLogo from "../assets/logos/mysql.png";
import reactLeafletLogo from "../assets/logos/reactleaflet.png";

const companyMappingVideo = `${import.meta.env.BASE_URL}company-mapping/Company-Mapping.mp4`;

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

        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">

            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-primary/10 border border-primary/20 backdrop-blur-md
                            shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="font-semibold tracking-wide text-primary">
                Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <div className="space-y-5">
              <p className="text-foreground/90">
                <span className="font-semibold text-primary">COMPANY MAPPING</span> is an 
                internship-based web application developed using React, Tailwind CSS, and MySQL, 
                designed to help monitor, verify, and manage company information through a modern 
                and interactive platform.
              </p>

              <p>
                I contributed to the development of the system by building responsive user interfaces, 
                implementing core functionalities, and integrating backend services and database operations 
                to ensure smooth and efficient data management.
              </p>

              <p>
                The platform also features interactive map integration for real-time company location 
                visualization, making information more organized, accessible, and user-friendly for 
                daily operational use.
              </p>

              <p>
                Through this project, I gained valuable hands-on experience in full-stack web development, 
                API integration, dynamic data handling, responsive UI/UX design, and collaborative 
                development within a professional team environment.
              </p>
            </div>

          </div>

        {/* Video Demonstration */}
            <div className="flex justify-center mb-12 mt-8">
              <div className="w-full max-w-2xl">
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-xl shadow-xl border border-primary/10 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 object-cover bg-black"
                >
                  <source src={companyMappingVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Technologies Used
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "React", logo: reactLogo },
                { name: "Tailwind CSS", logo: tailwindLogo },
                { name: "Express.js", logo: expressjsLogo },
                { name: "MySQL", logo: mysqlLogo },
                { name: "React Leaflet", logo: reactLeafletLogo },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  </div>
                  <p className="text-foreground font-semibold text-center text-sm leading-tight">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}