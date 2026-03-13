// "use client";
// // import from next
// import Image from "next/image";
// // import components
// import LineLogoHeading from "./lineLogoHeading";
// import SlideInOnScroll from "./slideInOnScroll";
// // Removed FadeInOnScroll import

// // Added: import hooks for scroll animation
// import { useEffect, useRef, useState } from "react";

// export default function CaseStudyDisplay({ caseStudy }) {
//   // Added: state and ref for scroll-triggered animation
//   const [challengeVisible, setChallengeVisible] = useState(false);
//   const challengeRef = useRef(null);

//   // Added: Intersection Observer logic
//   useEffect(() => {
//     const observer = new window.IntersectionObserver(
//       ([entry]) => {
//         setChallengeVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );
//     if (challengeRef.current) {
//       observer.observe(challengeRef.current);
//     }
//     return () => {
//       if (challengeRef.current) {
//         observer.unobserve(challengeRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full p-8 md:p-12 flex flex-col justify-center items-center">
//       {caseStudy ? (
//         <div className="w-full max-w-6xl mx-auto">
//           {/* ... */}
//           <div className="">
//             <div>
//               <SlideInOnScroll>
//                 <LineLogoHeading
//                   text="The Challenge"
//                   htmlElement={"h5"}
//                   textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
//                 />
//               </SlideInOnScroll>
//               <div className="grid grid-cols-2 flex justify-center items-center gap-4">
//                 {/* Changed: challenge section now scroll-animated */}
//                 <div
//                   ref={challengeRef} // Added ref
//                   className={`w-full h-auto p-2 ${
//                     challengeVisible
//                       ? "animate-in fade-in zoom-in duration-1000"
//                       : "opacity-0"
//                   }`}
//                 >
//                   {caseStudy.challenge.map((item, index) => (
//                     <p className="my-2 p-2 text-lg" key={index}>
//                       {item}
//                     </p>
//                   ))}
//                 </div>
//                 {/* No change to image section */}
//                 <div className="w-full h-auto p-2">
//                   <Image
//                     src={caseStudy.images[1].url}
//                     alt={caseStudy.images[1].alt || "Case Study Image"}
//                     width={caseStudy.images[1].width / 4}
//                     height={caseStudy.images[1].height / 4}
//                     className="my-4 shadow-xl mx-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ...rest of your component unchanged... */}
//           <div className="my-6">
//             <SlideInOnScroll>
//               <LineLogoHeading
//                 text="The Approach"
//                 htmlElement={"h5"}
//                 textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
//               />
//             </SlideInOnScroll>
//             {caseStudy.approach.map((item, index) => (
//               <p className="my-2" key={index}>
//                 {item}
//               </p>
//             ))}
//           </div>
//           <div className="my-6">
//             <div>
//               <SlideInOnScroll>
//                 <LineLogoHeading
//                   text="The Result"
//                   htmlElement={"h5"}
//                   textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
//                 />
//               </SlideInOnScroll>
//               {caseStudy.result.map((item, index) => (
//                 <p className="my-2" key={index}>
//                   {item}
//                 </p>
//               ))}
//             </div>
//           </div>
//           <div className="mt-6">
//             <SlideInOnScroll>
//               <LineLogoHeading
//                 text={
//                   caseStudy.partnership.type === "long-term"
//                     ? "Long-term Partnership"
//                     : "New Partnership"
//                 }
//                 htmlElement={"h5"}
//                 textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
//               />
//             </SlideInOnScroll>
//             {caseStudy.partnership.text.map((item, index) => (
//               <p className="my-2" key={index}>
//                 {item}
//               </p>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p>Case study data is not available.</p>
//       )}
//     </div>
//   );
// }

// import from next
import Image from "next/image";
// import components
import LineLogoHeading from "./lineLogoHeading";
import SlideInOnScroll from "./slideInOnScroll";
import FadeAndZoomInOnScroll from "./fadeAndZoomInOnScroll";
export default function CaseStudyDisplay({ caseStudy }) {
  return (
    <div className="w-full p-8 md:p-12 flex flex-col justify-center items-center">
      {caseStudy ? (
        <div className="w-full max-w-6xl mx-auto">
          {/* <span className="text-4xl font-courier-prime text-center block">
            CASE STUDY
          </span>
          <h1 className="font-bold text-center text-xl">{caseStudy.title}</h1>
          <div className="my-6">
            <h2 className="">
              <span className="font-bold">Client:</span> {caseStudy.client}
            </h2>
            {caseStudy.brand_partner && (
              <h2 className="">
                <span className="font-bold">Brand Partner:</span>{" "}
                {caseStudy.brand_partner}
              </h2>
            )}
            <h3>
              <span className="font-bold">Campaign:</span> {caseStudy.campaign}
            </h3>
            <h4>
              <span className="font-bold">Format:</span> {caseStudy.format}
            </h4>
          </div> */}
          <div className="">
            <div>
              <SlideInOnScroll>
                <LineLogoHeading
                  text="The Challenge"
                  htmlElement={"h5"}
                  textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
                />
              </SlideInOnScroll>
              <div className="grid grid-cols-2 flex justify-center items-center gap-4">
                {/* <div className="w-full h-auto p-2 animate-in fade-in zoom-in duration-1000"> */}

                <div className="w-full h-auto p-2 ">
                  <FadeAndZoomInOnScroll>
                    {caseStudy.challenge.map((item, index) => (
                      <p className="my-2 p-2 text-lg" key={index}>
                        {item}
                      </p>
                    ))}
                  </FadeAndZoomInOnScroll>
                </div>

                <div className="w-full h-auto p-2 my-6">
                  <FadeAndZoomInOnScroll>
                    <Image
                      src={caseStudy.images[16].url}
                      alt={caseStudy.images[16].alt || "Case Study Image"}
                      width={caseStudy.images[16].width / 4}
                      height={caseStudy.images[16].height / 4}
                      className="my-4 shadow-xl mx-auto"
                    />
                  </FadeAndZoomInOnScroll>
                </div>
              </div>
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
            {caseStudy.approach.map((item, index) => (
              <p className="my-2" key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className="my-6">
            <div>
              <SlideInOnScroll>
                <LineLogoHeading
                  text="The Result"
                  htmlElement={"h5"}
                  textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
                />
              </SlideInOnScroll>
              {caseStudy.result.map((item, index) => (
                <p className="my-2" key={index}>
                  {item}
                </p>
              ))}
            </div>
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
              <p className="my-2" key={index}>
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
