import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import kotlinLogo from "../assets/logos/kotlin.png";
import firebaseLogo from "../assets/logos/firebase.png";
import firestoreLogo from "../assets/logos/firestore.png";
import firebaseStorageLogo from "../assets/logos/firebasestorage.png";
import jetpackLogo from "../assets/logos/jetpack.png";

export default function FarmAid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const totalPages = 19;

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : prev === totalPages - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-8 mb-6">
          Farm-Aid: E-commerce App
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          User Manual Preview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              onClick={() => openImage(index)}
              className="relative cursor-pointer group"
            >
              <img
                src={`${import.meta.env.BASE_URL}manual/manual${index + 1}.png`}
                alt={`Manual Page ${index + 1}`}
                className="w-full rounded-xl shadow-lg border transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <Maximize className="w-8 h-8 text-white" />
              </div>

              <p className="text-center text-sm mt-2 text-muted-foreground">
                Page {index + 1}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Farm-Aid is an Android application developed using Kotlin and
            Firebase. The platform helps farmers sell crops online and connect
            with more customers.
          </p>

          <p>
            The application includes product listings, real-time updates, image
            uploads, authentication, and order management.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Technologies Used
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Kotlin", logo: kotlinLogo },
                { name: "Firebase Authentication", logo: firebaseLogo },
                { name: "Cloud Firestore", logo: firestoreLogo },
                { name: "Firebase Storage", logo: firebaseStorageLogo },
                { name: "Jetpack Compose", logo: jetpackLogo },
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

     {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center overflow-hidden">
            <button
              onClick={closeImage}
              className="fixed top-6 right-6 text-white hover:text-primary z-[60]"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-[100]
                        w-14 h-14 rounded-full
                        bg-black/50 backdrop-blur-md
                        border border-white/20
                        flex items-center justify-center
                        text-white hover:bg-primary
                        transition-all duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-[100]
                        w-14 h-14 rounded-full
                        bg-black/50 backdrop-blur-md
                        border border-white/20
                        flex items-center justify-center
                        text-white hover:bg-primary
                        transition-all duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="w-screen h-screen flex flex-col items-center justify-center px-24 py-10">
              <p className="text-white mb-4 text-sm font-medium">
                Page {selectedImage + 1} of {totalPages}
              </p>

              <img
                src={`${import.meta.env.BASE_URL}manual/manual${selectedImage + 1}.png`}
                alt={`Manual Page ${selectedImage + 1}`}
                className="block max-w-[75vw] max-h-[82vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
    </div>
  );
}