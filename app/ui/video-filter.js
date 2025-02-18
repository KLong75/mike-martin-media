"use client";
import { useState } from "react";
import VideoCategories from "@/app/ui/videoCategories";
import VideoGallery from "@/app/ui/videoGallery";

export default function VideoFilter() {
  const [selectedCategories, setSelectedCategories] = useState(["All Videos"]);

  const clearSelectedCategories = () => {
    setSelectedCategories(["All Videos"]);
  };

  return (
    <>
      <div className="">
        <VideoCategories onCategorySelected={setSelectedCategories} selectedCategories={selectedCategories} />
      </div>
      <VideoGallery
        selectedCategories={selectedCategories}
        excludedCategory={[""]}
        clearSelectedCategories={clearSelectedCategories}
      />
    </>
  );
}