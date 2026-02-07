// import from next
import Link from "next/link";
// import components
import BackLink from "@/app/ui/backLink";
// import data
import { caseStudies } from "@/app/lib/case-studies/case-studies";
import { siteUrl } from "@/app/lib/site-url";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "",
    };
  }
  return {
    title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
    description: caseStudy.long_term_partnership,
    alternates: {
      canonical: `/case-studies/study/${caseStudy.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/case-studies/study/${caseStudy.slug}`,
      title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
      description: caseStudy.long_term_partnership,
      images: [
        {
          url: caseStudy.preview_image.url,
          width: caseStudy.preview_image.width,
          height: caseStudy.preview_image.height,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: `${caseStudy.client} | ${caseStudy.title} | Mike Martin Media Case Study`,
      description: caseStudy.long_term_partnership,
      images: [
        {
          url: caseStudy.preview_image.url,
          width: caseStudy.preview_image.width,
          height: caseStudy.preview_image.height,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);
  console.log("Case Study:", caseStudy);
  if (!caseStudy) {
    return (
      <div>
        <h1>Case Study Not Found</h1>
        <p>The case study you are looking for does not exist.</p>
        <BackLink href="/case-studies">Back to Case Studies</BackLink>
      </div>
    );
  }
  return (
    <div>
      <h1>
        {caseStudy.client}: {caseStudy.title}
      </h1>
    </div>
  );
}
