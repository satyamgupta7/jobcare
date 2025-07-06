import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Recruitment Services - Job Care Consultancy Patna",
  description: "Professional corporate recruitment and hiring solutions for companies in Patna. Find the right talent for your organization with our expert recruitment services.",
};

export default function CorporateRecruitmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-24 pb-16 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <span className="mr-2">🏢</span>
              Corporate Hiring Solutions
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Find the Right <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Talent</span> for Your Company
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Partner with Patna&apos;s leading recruitment consultancy. We connect your company with pre-screened, qualified candidates across all industries.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#contact" className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105">
                Hire Top Talent
              </Link>
              <Link href="#services" className="rounded-xl border-2 border-purple-600 px-8 py-4 font-semibold text-purple-600 transition-all hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Trusted by 500+ Companies</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 md:text-4xl">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600 md:text-4xl">5000+</div>
              <div className="text-gray-600 dark:text-gray-400">Successful Hires</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600 md:text-4xl">15</div>
              <div className="text-gray-600 dark:text-gray-400">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600 md:text-4xl">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Recruitment Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Comprehensive hiring solutions for your business needs</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Permanent Staffing</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Full-time permanent employees across all levels and departments.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Executive level positions</li>
                <li>• Mid-level management</li>
                <li>• Entry-level positions</li>
                <li>• Specialized roles</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Temporary Staffing</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Flexible staffing solutions for project-based requirements.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Project-based hiring</li>
                <li>• Seasonal workforce</li>
                <li>• Contract positions</li>
                <li>• Temporary replacements</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Executive Search</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Specialized recruitment for senior leadership positions.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• C-level executives</li>
                <li>• Department heads</li>
                <li>• Senior managers</li>
                <li>• Board positions</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-4xl">📋</div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Bulk Hiring</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Large-scale recruitment for expansion and new projects.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Campus recruitment</li>
                <li>• Mass hiring drives</li>
                <li>• Multiple positions</li>
                <li>• Quick turnaround</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-4xl">🎓</div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Campus Recruitment</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Fresh talent acquisition from colleges and universities.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Graduate hiring</li>
                <li>• Internship programs</li>
                <li>• Trainee positions</li>
                <li>• Entry-level roles</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-4xl">💼</div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Industry Specific</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Specialized recruitment for specific industry requirements.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• IT & Software</li>
                <li>• Banking & Finance</li>
                <li>• Healthcare</li>
                <li>• Manufacturing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Recruitment Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Streamlined process to find the perfect candidates</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl dark:bg-purple-900/30">📝</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">1. Requirement Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">Understanding your specific hiring needs and job requirements</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl dark:bg-blue-900/30">🔍</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">2. Candidate Sourcing</h3>
              <p className="text-gray-600 dark:text-gray-400">Finding and attracting qualified candidates from our network</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900/30">✅</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">3. Screening & Shortlisting</h3>
              <p className="text-gray-600 dark:text-gray-400">Thorough screening and shortlisting of best-fit candidates</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl dark:bg-orange-900/30">🤝</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">4. Interview Coordination</h3>
              <p className="text-gray-600 dark:text-gray-400">Coordinating interviews and final selection process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Industries We Recruit For</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              "IT & Software", "Banking & Finance", "Healthcare", "Manufacturing", "Retail & Sales",
              "Education", "Real Estate", "Hospitality", "Logistics", "BPO & Customer Service",
              "Pharmaceuticals", "Automotive", "Construction", "Media & Marketing", "Government"
            ].map((industry, index) => (
              <div key={index} className="rounded-lg bg-white p-4 text-center shadow-sm dark:bg-gray-900">
                <p className="font-medium text-gray-900 dark:text-white">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Hire Top Talent?</h2>
            <p className="mb-8 text-xl opacity-90">Partner with us to find the perfect candidates for your organization</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-600 transition-all hover:scale-105">
                Start Hiring Today
              </Link>
              <Link href="tel:+917979733414" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10">
                Call: +91 7979733414
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}