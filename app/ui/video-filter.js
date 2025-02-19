"use client";
// import from react
import { useState } from "react";
// import components
import VideoCategories from "@/app/ui/videoCategories";
import VideoGallery from "@/app/ui/videoGallery";

export default function VideoFilter() {
  const [selectedCategories, setSelectedCategories] = useState(["All Videos"]);

  const clearSelectedCategories = () => {
    setSelectedCategories(["All Videos"]);
  };

  return (
    <>
      <div>
        <VideoCategories
          onCategorySelected={setSelectedCategories}
          selectedCategories={selectedCategories}
        />
      </div>
      <div>
        <VideoGallery
          selectedCategories={selectedCategories}
          excludedCategory={[""]}
          clearSelectedCategories={clearSelectedCategories}
        />
      </div>
    </>
  );
}
