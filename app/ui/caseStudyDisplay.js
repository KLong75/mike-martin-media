// import from next
import Image from "next/image";
// import components
import LineLogoHeading from "./lineLogoHeading";
import SlideInOnScroll from "./slideInOnScroll";
import FadeAndZoomInOnScroll from "./fadeAndZoomInOnScroll";
import ClientVideoFrame from "./clientVideoFrame";

export default function CaseStudyDisplay({ caseStudy }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {caseStudy ? (
        <div className="w-full max-w-6xl mx-auto ">
          <div className="">
            <div>
              <SlideInOnScroll>
                <LineLogoHeading
                  text="The Challenge"
                  htmlElement={"h5"}
                  textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-10 text-lg sm:text-xl md:text-2xl"
                />
              </SlideInOnScroll>
              <FadeAndZoomInOnScroll>
                <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 flex justify-center items-center gap-6 lg:mt-12 lg:mb-12">
                  <div className="w-full h-auto lg:mt-4 pb-0 lg:pb-6 lg:p-6 flex flex-col justify-center items-center">
                    {caseStudy.challenge.map((item, index) => (
                      <p
                        className="my-2 lg:px-6 md:text-lg 2xl:text-xl"
                        key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="w-full h-auto lg:p-6 lg:pr-12 lg:my-6">
                    <Image
                      src={caseStudy.images[0].url}
                      alt={caseStudy.images[0].alt || "Case Study Image"}
                      width={caseStudy.images[0].width / 4}
                      height={caseStudy.images[0].height / 4}
                      className="lg:my-4 shadow-xl mx-auto"
                    />
                  </div>
                </div>
              </FadeAndZoomInOnScroll>
            </div>
          </div>
          <div className="my-6">
            <SlideInOnScroll>
              <LineLogoHeading
                text="The Approach"
                htmlElement={"h5"}
                textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
              />
            </SlideInOnScroll>
            <FadeAndZoomInOnScroll>
              <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 flex justify-center items-center gap-6 lg:mt-12 lg:mb-12">
                <div className="w-full h-auto lg:mt-4 lg:p-6 lg:pl-12 lg:my-6">
                  <Image
                    src={caseStudy.images[5].url}
                    alt={caseStudy.images[5].alt || "Case Study Image"}
                    width={caseStudy.images[5].width / 4}
                    height={caseStudy.images[5].height / 4}
                    className="mt-6 shadow-xl mx-auto"
                  />
                </div>
                <div className="w-full h-auto lg:mt-4 pb-0 lg:pb-6 lg:p-6 flex flex-col justify-center items-center">
                  {caseStudy.approach.map((item, index) => (
                    <p
                      className="my-2 lg:px-6 md:text-lg 2xl:text-xl"
                      key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </FadeAndZoomInOnScroll>
          </div>
          <div className="my-6">
            <SlideInOnScroll>
              <LineLogoHeading
                text="The Result"
                htmlElement={"h5"}
                textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
              />
            </SlideInOnScroll>
            <FadeAndZoomInOnScroll>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:mt-8 lg:mt-12 xl:mt-16 lg:mb-12 flex justify-center items-center">
                {caseStudy.videos.map((video, index) => (
                  <div className="w-full" key={index}>
                    <ClientVideoFrame
                      videoUrl={video}
                      category=" "
                      image_src={video.image_src}
                    />
                  </div>
                ))}
              </div>
              <div className="w-full h-auto lg:mt-4 flex flex-col justify-center items-center lg:mb-24">
                {caseStudy.result.map((item, index) => (
                  <p
                    className="my-8 lg:my-0 lg:px-60 md:text-lg 2xl:text-xl italic font-semibold"
                    key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </FadeAndZoomInOnScroll>
          </div>
          <div className="mt-6">
            <SlideInOnScroll>
              <LineLogoHeading
                text={
                  caseStudy.partnership.type === "long-term"
                    ? "Long-term Partnership"
                    : "New Partnership"
                }
                htmlElement={"h5"}
                textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
              />
            </SlideInOnScroll>
            {caseStudy.partnership.text.map((item, index) => (
              <p className="my-2 text-lg" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Case study data is not available.</p>
      )}
    </div>
  );
}

// "use client";

// import { useState } from "react";

// export default function CaseStudyDisplay({ caseStudy }) {
//   const [activeTab, setActiveTab] = useState("challenge");

//   if (!caseStudy) {
//     return <p>Case study data is not available.</p>;
//   }

//   const tabs = [
//     { key: "challenge", label: "The Challenge" },
//     { key: "approach", label: "The Approach" },
//     { key: "result", label: "The Result" },
//     { key: "long_term_partnership", label: "Long Term Partnership" },
//   ];

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "challenge":
//         return (
//           <div>
//             <span className="font-span">The Challenge:</span>{" "}
//             {Array.isArray(caseStudy.challenge)
//               ? caseStudy.challenge.map((item, index) => <p key={index}>{item}</p>)
//               : <p>{caseStudy.challenge}</p>}
//           </div>
//         );
//       case "approach":
//         return (
//           <div>
//             <span className="font-span">The Approach:</span>{" "}
//             {Array.isArray(caseStudy.approach)
//               ? caseStudy.approach.map((item, index) => <p key={index}>{item}</p>)
//               : <p>{caseStudy.approach}</p>}
//           </div>
//         );
//       case "result":
//         return (
//           <div>
//             <span className="font-span">The Result:</span>{" "}
//             {Array.isArray(caseStudy.result)
//               ? caseStudy.result.map((item, index) => <p key={index}>{item}</p>)
//               : <p>{caseStudy.result}</p>}
//           </div>
//         );
//       case "long_term_partnership":
//         return (
//           <div>
//             <span className="font-span">Long-term Partnership:</span>{" "}
//             <p>{caseStudy.long_term_partnership}</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="mb-4">
//         <h1>{caseStudy.title}</h1>
//         <p>{caseStudy.client}</p>
//         <p>{caseStudy.campaign}</p>
//         <p>{caseStudy.format}</p>
//       </div>
//       <div className="bg-gray-100 rounded shadow p-4">
//         <div className="flex border-b mb-4">
//           {tabs.map(tab => (
//             <button
//               key={tab.key}
//               className={`px-4 py-2 font-semibold ${
//                 activeTab === tab.key
//                   ? "border-b-2 border-blue-500 text-blue-600"
//                   : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab(tab.key)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//         <div className="mt-2">
//           {renderTabContent()}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function CaseStudyDisplay({ caseStudy }) {
//   const [activeTab, setActiveTab] = useState("challenge");

//   if (!caseStudy) {
//     return <p>Case study data is not available.</p>;
//   }

//   const tabs = [
//     { key: "challenge", label: "The Challenge" },
//     { key: "approach", label: "The Approach" },
//     { key: "result", label: "The Result" },
//     { key: "long_term_partnership", label: "Long Term Partnership" },
//   ];

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "challenge":
//         return (
//           <div>
//             <span className="font-span">The Challenge:</span>{" "}
//             {Array.isArray(caseStudy.challenge)
//               ? caseStudy.challenge.map((item, idx) => <p key={idx}>{item}</p>)
//               : <p>{caseStudy.challenge}</p>}
//           </div>
//         );
//       case "approach":
//         return (
//           <div>
//             <span className="font-span">The Approach:</span>{" "}
//             {Array.isArray(caseStudy.approach)
//               ? caseStudy.approach.map((item, idx) => <p key={idx}>{item}</p>)
//               : <p>{caseStudy.approach}</p>}
//           </div>
//         );
//       case "result":
//         return (
//           <div>
//             <span className="font-span">The Result:</span>{" "}
//             {Array.isArray(caseStudy.result)
//               ? caseStudy.result.map((item, idx) => <p key={idx}>{item}</p>)
//               : <p>{caseStudy.result}</p>}
//           </div>
//         );
//       case "long_term_partnership":
//         return (
//           <div>
//             <span className="font-span">Long-term Partnership:</span>{" "}
//             <p>{caseStudy.long_term_partnership}</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="w-full flex justify-center items-center min-h-[600px]">
//       <div className="relative bg-yellow-100 rounded-t-lg shadow-lg w-full max-w-2xl" style={{ border: "2px solid #e2c16b" }}>
//         {/* Tabs styled as file folder tabs */}
//         <div className="absolute -top-8 left-0 flex space-x-2 z-10">
//           {tabs.map((tab, idx) => (
//             <button
//               key={tab.key}
//               className={`rounded-t-lg px-6 py-2 font-semibold shadow ${
//                 activeTab === tab.key
//                   ? "bg-yellow-300 border-l-2 border-r-2 border-t-2 border-yellow-400 text-yellow-900"
//                   : "bg-yellow-200 text-yellow-700"
//               }`}
//               style={{
//                 marginLeft: idx === 0 ? "16px" : "0",
//                 borderBottom: activeTab === tab.key ? "none" : "2px solid #e2c16b",
//                 zIndex: activeTab === tab.key ? 2 : 1,
//                 position: "relative",
//                 top: activeTab === tab.key ? "0px" : "4px"
//               }}
//               onClick={() => setActiveTab(tab.key)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//         {/* Folder cover */}
//         <div className="pt-12 pb-6 px-8 bg-yellow-100 rounded-t-lg">
//           <div className="mb-4">
//             <h1 className="text-2xl font-bold text-yellow-900">{caseStudy.title}</h1>
//             <p className="text-yellow-800">{caseStudy.client}</p>
//             <p className="text-yellow-800">{caseStudy.campaign}</p>
//             <p className="text-yellow-800">{caseStudy.format}</p>
//           </div>
//           <div className="bg-white rounded shadow p-4 mt-4 min-h-[120px]">
//             {renderTabContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
