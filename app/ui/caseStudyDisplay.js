export default function CaseStudyDisplay({ caseStudy }) {
  return (
    <div className="w-full">
      {caseStudy ? (
        <div>
        <h1>Case Study</h1>
          <h2>{caseStudy.title}</h2>
          <p>{caseStudy.client}</p>
          <p>{caseStudy.campaign}</p>
          <p>{caseStudy.format}</p>
          <div>
            {caseStudy.challenge.length > 1 ? (
              <div>
                <p>
                  <span className="font-span">The Challenge:</span>{" "}
                  {caseStudy.challenge[0]}
                </p>
                <p>{caseStudy.challenge[1]}</p>
              </div>
            ) : (
              <p>
                <span className="font-span">The Challenge:</span>{" "}
                {caseStudy.challenge}
              </p>
            )}
          </div>
          <div>
            {caseStudy.approach.length > 1 ? (
              <div>
                <p>
                  <span className="font-span">The Approach:</span>{" "}
                  {caseStudy.approach[0]}
                </p>
                <p>{caseStudy.approach[1]}</p>
                <p>{caseStudy.approach[2]}</p>
              </div>
            ) : (
              <p>
                <span className="font-span">The Approach:</span>{" "}
                {caseStudy.approach}
              </p>
            )}
          </div>
          <div>
            {caseStudy.result.length > 1 ? (
              <div>
                <p>
                  <span className="font-span">The Result:</span>{" "}
                  {caseStudy.result[0]}
                </p>
                <p>{caseStudy.result[1]}</p>
              </div>
            ) : (
              <p>
                <span className="font-span">The Result:</span>{" "}
                {caseStudy.result}              </p>
            )}
          </div>
          <p>
            <span className="font-span">Long-term Partnership:</span>{" "}
            {caseStudy.long_term_partnership}
          </p>
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