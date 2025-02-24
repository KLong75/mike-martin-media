"use client";
//import components
import { useState, useEffect } from "react";
import PhotoGallery from "./photoGallery";
// import data
import { photographyCoverImages } from "../lib/capabilities/photography";
import { mobilePhotographyCoverImages } from "../lib/capabilities/photography";

export default function TriPicBanner() {
  const [images, setImages] = useState(mobilePhotographyCoverImages);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImages(photographyCoverImages);
      } else {
        setImages(mobilePhotographyCoverImages);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full text-white cursor-pointer">
        {images.map((image) => (
          <PhotoGallery
            key={image.client}
            label={image.label}
            client={image.client}
            href={image.href}
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
            priority={image.priority}
            category={image.category}
          />
        ))}
      </div>
    </div>
  );
}