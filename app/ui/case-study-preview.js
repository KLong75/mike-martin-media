// import from next
import Link from "next/link";
import Image from "next/image";

export default function CaseStudyPreview({ caseStudy }) {
  return (
    <div className="w-full p-6">
      {caseStudy ? (
        <Link href={`/case-studies/study/${caseStudy.slug}`}>
          <div className="p-6 bg-neutral-200 md:hover:bg-black md:hover:text-white transition-colors duration-1000 ease-in-out group shadow-2xl md:shadow-none rounded-2xl md:rounded-none flex flex-col">
          <div className="mx-auto">
            <h3 className="text-center text-xl font-semibold mb-1">{caseStudy.title}</h3>
            <h4>Client: {caseStudy.client}</h4>
            <h5>Campaign: {caseStudy.campaign}</h5>
            <h6>Format: {caseStudy.format}</h6>
          </div>
            <div className="flex justify-center w-full h-auto py-4">
              <Image
                className="shadow-xl"
                src={caseStudy.preview_image.url}
                width={caseStudy.preview_image.width}
                height={caseStudy.preview_image.height}
                alt={caseStudy.preview_image.alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              {Array.isArray(caseStudy.challenge)
                ? caseStudy.challenge.map((item, idx) => (
                    <p key={idx} className="mb-2">{item}</p>
                  ))
                : <p>{caseStudy.challenge}</p>
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
