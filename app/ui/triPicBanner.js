//import components
import PhotoGallery from "./photoGallery";
// import data
import { photographyCoverImages } from "../lib/photography";

export default function TriPicBanner() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 w-full h-full text-white cursor-pointer">
      {photographyCoverImages.map((image) => (
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
        />
      ))}
      </div>  
    </div>
  );
}