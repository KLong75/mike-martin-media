// import from next
import Link from "next/link";
import Image from "next/image";
// import from utils
import { shortenPostText } from "@/utils/utils";

export default function CaseStudyPreview({ caseStudy }) {
  return (
    <div className="w-full p-6 max-w-xl mx-auto">
      {caseStudy ? (
        <Link href={`/case-studies/study/${caseStudy.slug}`}>
          <div className="p-2 bg-neutral-200 md:hover:bg-black md:hover:text-white transition-colors duration-1000 ease-in-out group shadow-2xl md:shadow-none rounded-2xl md:rounded-none flex flex-col">
          <div className="mx-auto mb-2">
            <h3 className="text-center text-xl font-semibold my-1">{caseStudy.title}</h3>
            <h4><span className="font-bold">Client:</span> {caseStudy.client}</h4>
            <h5><span className="font-bold">Campaign:</span> {caseStudy.campaign}</h5>
            <h6><span className="font-bold">Format:</span> {caseStudy.format}</h6>
          </div>
            <div className="flex justify-center w-full h-auto px-4">
              <Image
                className="shadow-xl"
                src={caseStudy.preview_image.url}
                width={caseStudy.preview_image.width}
                height={caseStudy.preview_image.height}
                alt={caseStudy.preview_image.alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              {Array.isArray(caseStudy.challenge)
                ? <p><span className="font-bold">The Challenge:</span> {shortenPostText(caseStudy.challenge[0], 200)}</p>
                : <p><span className="font-span">The Challenge:</span> {shortenPostText(caseStudy.challenge, 200)}</p>
              }
            </div>
          </div>
        </Link>
      ) : (
        <p>Case study data is not available.</p>
      )}
    </div>
  );
}
