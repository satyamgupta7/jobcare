import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Placement Services - Job Care Consultancy Patna",
  description: "Professional job placement services in Patna. Connect with 500+ companies across all industries. 98% success rate with personalized job matching.",
};

export default function JobPlacementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 pb-16 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <span className="mr-2">💼</span>
              Professional Job Placement
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Find Your Perfect <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Career Match</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Connect with 500+ top companies in Patna. Our expert team ensures perfect job-candidate matching with 98% success rate.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#contact" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105">
                Start Your Job Search
              </Link>
              <Link href="#process" className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400">
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600 md:text-4xl">5000+</div>
              <div className="text-gray-600 dark:text-gray-400">Jobs Placed</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600 md:text-4xl">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 md:text-4xl">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600 md:text-4xl">15</div>
              <div className="text-gray-600 dark:text-gray-400">Avg Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Placement Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simple, efficient, and results-driven approach</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl dark:bg-blue-900/30">📋</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">1. Profile Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">We analyze your skills, experience, and career goals</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900/30">🎯</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">2. Job Matching</h3>
              <p className="text-gray-600 dark:text-gray-400">Perfect match with suitable positions from our network</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl dark:bg-purple-900/30">📞</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">3. Interview Setup</h3>
              <p className="text-gray-600 dark:text-gray-400">We coordinate and schedule interviews with employers</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl dark:bg-orange-900/30">🎉</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">4. Job Placement</h3>
              <p className="text-gray-600 dark:text-gray-400">Successful placement and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Industries We Serve</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Placement opportunities across diverse sectors</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "💻", title: "IT & Software", desc: "Software development, web design, system administration" },
              { icon: "🏦", title: "Banking & Finance", desc: "Banking operations, financial analysis, accounting" },
              { icon: "🏥", title: "Healthcare", desc: "Medical professionals, healthcare administration" },
              { icon: "📞", title: "BPO & Customer Service", desc: "Call center operations, customer support" },
              { icon: "🏭", title: "Manufacturing", desc: "Production, quality control, operations management" },
              { icon: "🛒", title: "Retail & Sales", desc: "Sales executives, store management, marketing" }
            ].map((industry, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 text-3xl">{industry.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{industry.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Find Your Dream Job?</h2>
            <p className="mb-8 text-xl opacity-90">Join thousands of professionals who found their perfect career match with us</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:scale-105">
                Contact Us Today
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