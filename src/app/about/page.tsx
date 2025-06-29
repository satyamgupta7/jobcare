import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Job Care Consultancy - Leading Job Placement Services in Patna | Our Story",
  description:
    "Learn about Job Care Consultancy journey, mission, and commitment to connecting talented professionals with top companies in Patna. Discover our 98% success rate and personalized approach to career placement.",
  keywords:
    "about job care consultancy, job placement company patna, career consultancy patna, job consultancy services, employment agency patna, recruitment company patna",
  openGraph: {
    title:
      "About Job Care Consultancy - Leading Job Placement Services in Patna",
    description:
      "Discover our mission to transform careers in Patna with personalized job placement services and industry expertise.",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
