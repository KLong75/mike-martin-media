"use client";
import { useState } from "react";
import VideoCategories from "@/app/ui/videoCategories";
import VideoGallery from "@/app/ui/videoGallery";

export default function VideoFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");

  return (
    <>
      <div className="">
        <VideoCategories onCategorySelected={setSelectedCategory} />
      </div>
      <VideoGallery
        selectedCategory={selectedCategory}
        excludedCategory={["Livestream"]}
      />
    </>
  );
}