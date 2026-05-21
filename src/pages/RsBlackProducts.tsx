import { Link } from "react-router-dom";


import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import javascriptLogo from "../assets/logos/javascript.png";

export default function RsBlackProducts() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="text-primary hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-8 mb-6">
          R's Black Products
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
              <span className="font-semibold text-primary">R's Black Products</span> is a simple e-commerce website created using HTML, CSS, and JavaScript. It showcases products with a clean layout, responsive design, and interactive features for browsing product details.
            </p>

            <p>
              I contributed as a full stack developer in building and developing the website's frontend interface, functionality, and overall system structure.
            </p>
          </div>
        </div>

        {/* Project Image */}
        <div className="mt-12 mb-16 max-w-4xl">
          <img
            src="src/assets/rsnblack.png" 
            alt="R's Black Products Screenshot"
            className="w-full rounded-lg border border-border shadow-lg"
          />
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
                { name: "HTML", logo: htmlLogo },
                { name: "CSS", logo: cssLogo },
                { name: "JavaScript", logo: javascriptLogo },
                ].map((tech) => (
                <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                    />
                    </div>

                    <p className="text-foreground font-semibold text-center text-sm">
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