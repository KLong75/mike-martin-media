export default function CaseStudyDisplay({ caseStudy }) {
  return (
    <div>
      {caseStudy ? (
        <div>
          <h1>{caseStudy.title}</h1>
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