"use client";
// import from react
import { useState } from "react";
// import components
import VideoCategories from "@/app/ui/videoCategories";
import WorkGallery from "@/app/ui/workGallery";

export default function VideoFilter() {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const clearSelectedCategories = () => {
    setSelectedCategories(["All"]);
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
        <WorkGallery
          selectedCategories={selectedCategories}
          excludedCategory={[""]}
          clearSelectedCategories={clearSelectedCategories}
          numberOfVideos={57}
        />
      </div>
    </>
  );
}
