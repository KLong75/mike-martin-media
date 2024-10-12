"use client";
import { useState } from "react";
import VideoCategories from "@/app/ui/videoCategories";
import VideoGallery from "@/app/ui/videoGallery";

export default function VideoFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");

  return (
    <>
      <section className="-mt-4">
        <VideoCategories onCategorySelected={setSelectedCategory} />
      </section>
      <VideoGallery
        selectedCategory={selectedCategory}
        excludedCategory={["Drone", "Livestream", "Animation"]}
      />
    </>
  );
}