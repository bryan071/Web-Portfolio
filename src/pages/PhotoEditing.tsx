import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Maximize } from "lucide-react";

import photoshopLogo from "../assets/logos/Adobe Photoshop.png";
import illustratorLogo from "../assets/logos/Adobe Illustrator.png";
import davinci from "../assets/logos/DaVinci Resolve.png";
import premiereLogo from "../assets/logos/Adobe Premiere.png";
import vegasLogo from "../assets/logos/Sony Vegas.png";

const showcaseImages = [
  { image: "showcase1.jpg", category: "Photo Editing" },
  { image: "showcase2.jpg", category: "Graphic Design" },
  { youtubeId: "ijV85CaZKyE", thumbnail: "tabletop.png", category: "Video Editing" },
  { youtubeId: "Co8m8w-wa50", thumbnail: "3dgame.png", category: "Video Editing" },
];

const categories = ["All", "Photo Editing", "Graphic Design", "Video Editing"];

export default function PhotoEditing() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? showcaseImages
      : showcaseImages.filter((item) => item.category === activeCategory);

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-8 mb-6">
          Creatives Portfolio
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          This portfolio showcases my photo editing, graphic design, and video editing projects.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImage(null);
              }}
              className={`px-5 py-2 rounded-full border transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry / Lightbox Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">
          {filteredImages.map((item, index) => (
            <div
              key={item.image || item.youtubeId}
              onClick={() => setSelectedImage(index)}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-border shadow-lg group cursor-pointer animate-in fade-in zoom-in duration-500"
            >
              <img
                src={`${import.meta.env.BASE_URL}showcase/${item.image || item.thumbnail}`}
                alt={item.category}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

             {item.youtubeId && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                <Maximize className="w-8 h-8 text-white mb-2" />
                <p className="text-white font-semibold">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Technologies that I can use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Adobe Photoshop", logo: photoshopLogo },
              { name: "Adobe Illustrator", logo: illustratorLogo },
              { name: "DaVinci Resolve", logo: davinci },
              { name: "Adobe Premiere", logo: premiereLogo },
              { name: "Sony Vegas", logo: vegasLogo },
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

      {/* Fullscreen Modal Preview */}
      {selectedImage !== null && filteredImages[selectedImage] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white hover:text-primary z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 text-white hover:text-primary z-50"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <p className="text-white mb-4">
              {selectedImage + 1} of {filteredImages.length}
            </p>

            {filteredImages[selectedImage]?.image ? (
              <img
                src={`${import.meta.env.BASE_URL}showcase/${filteredImages[selectedImage].image}`}
                alt={filteredImages[selectedImage].category}
                className="max-h-[88vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${filteredImages[selectedImage]?.youtubeId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="w-[90vw] h-[80vh] rounded-xl shadow-2xl"
              />
            )}
          </div>

          <button
            onClick={nextImage}
            className="absolute right-5 text-white hover:text-primary z-50"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </div>
  );
}