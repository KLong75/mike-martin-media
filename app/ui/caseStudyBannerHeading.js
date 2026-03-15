export default function CaseStudyBannerHeading({ title, heading, caseStudy }) {
  return (
    <div className="bg-black ">
      <div className="w-full max-w-6xl mx-auto">
        {/* <div className="bg-black text-white w-full grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 p-6 sm:px-8 md:px-12"> */}
         <div className="bg-black text-white w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 sm:px-8 md:px-12">
          <div className="lg:mx-auto">
            <span className="text-2xl xl:text-3xl font-medium font-courier-prime ">
              {title.toUpperCase()}
            </span>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">{heading}</h2>
          </div>

          <div className="lg:mx-auto flex flex-col justify-center items-start">
            <h2>
              <span className="">Client:</span> <span>{caseStudy.client}</span>
            </h2>
            {caseStudy.brand_partner && (
              <h2>
                <span className="">Brand Partner:</span>{" "}
                <span className="">{caseStudy.brand_partner}</span>
              </h2>
            )}
            <h3>
              <span className="">Campaign:</span>{" "}
              <span className="">{caseStudy.campaign}</span>
            </h3>
            <h4>
              <span className="">Format:</span>{" "}
              <span className="">{caseStudy.format}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
