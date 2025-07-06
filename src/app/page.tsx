import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Job Care Consultancy - Premier Job Placement Services in Patna | Find Your Dream Job",
  description:
    "Job Care Consultancy offers top job placement services in Patna across all sectors. Find jobs for Accountant, Receptionist, Data Entry, Marketing Manager, Supervisor, HR, Store Manager, Telecaller, Driver and more. 98% success rate with 5000+ placements.",
  keywords:
    "job placement patna, job consultancy patna, accountant jobs patna, receptionist jobs patna, data entry jobs patna, marketing manager jobs patna, supervisor jobs patna, HR jobs patna, store manager jobs patna, telecaller jobs patna, driver jobs patna, job care consultancy",
  authors: [{ name: "Job Care Consultancy" }],
  creator: "Job Care Consultancy",
  publisher: "Job Care Consultancy",
  robots: "index, follow",
  openGraph: {
    title: "Job Care Consultancy - Premier Job Placement Services in Patna",
    description:
      "Find your dream job in Patna with Job Care Consultancy. We offer placement services across all sectors with 98% success rate.",
    type: "website",
    locale: "en_IN",
    siteName: "Job Care Consultancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Care Consultancy - Premier Job Placement Services in Patna",
    description:
      "Find your dream job in Patna with Job Care Consultancy. 98% success rate, 5000+ placements across all sectors.",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Industries />
      <Features />
      <AboutSectionOne />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
