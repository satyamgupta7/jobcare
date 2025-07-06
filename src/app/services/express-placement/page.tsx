import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Express Placement - 15 Day Job Guarantee | Job Care Consultancy Patna",
  description: "Get placed in your dream job within 15 days guaranteed! Express placement service with 98% success rate. Fast-track your career with Job Care Consultancy.",
};

export default function ExpressPlacementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 pt-24 pb-16 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.1)_0%,transparent_50%)]"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <span className="mr-2">⚡</span>
              15-Day Job Guarantee
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Get Hired in <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">15 Days</span> Guaranteed!
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Our Express Placement service guarantees job placement within 15 days. Fast-track your career with our proven process and extensive network.
            </p>
            <div className="mb-8 rounded-2xl bg-gradient-to-r from-orange-100 to-red-100 p-6 dark:from-orange-900/20 dark:to-red-900/20">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">15 Days or Money Back!</div>
              <div className="text-gray-600 dark:text-gray-400">*Terms and conditions apply</div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#contact" className="rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105">
                Start Express Placement
              </Link>
              <Link href="#how-it-works" className="rounded-xl border-2 border-orange-600 px-8 py-4 font-semibold text-orange-600 transition-all hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our 15-Day Guarantee</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-6 dark:from-orange-900/10 dark:to-red-900/10">
                <div className="mb-4 text-4xl">⚡</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Fast Processing</h3>
                <p className="text-gray-600 dark:text-gray-400">Priority processing of your profile with immediate job matching</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-6 dark:from-orange-900/10 dark:to-red-900/10">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Guaranteed Results</h3>
                <p className="text-gray-600 dark:text-gray-400">Job placement within 15 days or full refund of service charges</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-6 dark:from-orange-900/10 dark:to-red-900/10">
                <div className="mb-4 text-4xl">🏆</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Premium Support</h3>
                <p className="text-gray-600 dark:text-gray-400">Dedicated consultant and 24/7 support throughout the process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Express Placement Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Streamlined 15-day process for guaranteed results</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-bold">Day 1-2</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Profile Assessment & Registration</h3>
                  <p className="text-gray-600 dark:text-gray-400">Complete profile analysis, skill assessment, and express service registration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-bold">Day 3-5</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Rapid Job Matching</h3>
                  <p className="text-gray-600 dark:text-gray-400">Immediate matching with suitable positions from our priority job database.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-bold">Day 6-10</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Interview Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-400">Fast-track interview scheduling with multiple companies simultaneously.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-bold">Day 11-15</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Final Selection & Placement</h3>
                  <p className="text-gray-600 dark:text-gray-400">Interview completion, offer negotiation, and final job placement.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 p-8 dark:from-orange-900/20 dark:to-red-900/20">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🚀</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Express Track</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">Priority processing with dedicated resources for fastest results</p>
                  <div className="rounded-lg bg-orange-600 px-4 py-2 text-white font-semibold">15 Days Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Express Service Features</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "⚡", title: "Priority Processing", desc: "Your profile gets immediate attention and priority handling" },
              { icon: "🎯", title: "Targeted Matching", desc: "Focused job matching based on your exact requirements" },
              { icon: "📞", title: "Dedicated Consultant", desc: "Personal consultant assigned for your express placement" },
              { icon: "🔄", title: "Multiple Interviews", desc: "Simultaneous interviews with multiple companies" },
              { icon: "💰", title: "Salary Negotiation", desc: "Expert negotiation to get you the best offer" },
              { icon: "📋", title: "Document Support", desc: "Complete assistance with all placement documentation" }
            ].map((feature, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Express Placement Success</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Real results from our express placement service</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-center">
                <div className="text-3xl font-bold text-orange-600">12 Days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</div>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400">&quot;Got placed as a Software Engineer in just 12 days. Amazing service!&quot;</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-center">
                <div className="text-3xl font-bold text-orange-600">10 Days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Marketing Manager</div>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400">&quot;Express service delivered exactly as promised. Highly recommended!&quot;</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
              <div className="mb-4 text-center">
                <div className="text-3xl font-bold text-orange-600">14 Days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">HR Executive</div>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400">&quot;Professional service with guaranteed results. Worth every penny!&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Express Placement Investment</h2>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">Premium service with guaranteed results</p>
            <div className="rounded-2xl border-2 border-orange-600 bg-gradient-to-br from-orange-50 to-red-50 p-8 dark:from-orange-900/10 dark:to-red-900/10">
              <div className="mb-4 text-4xl font-bold text-orange-600">Contact for Pricing</div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">Customized pricing based on your requirements and industry</p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>✅ 15-day placement guarantee</div>
                <div>✅ Money-back assurance</div>
                <div>✅ Dedicated consultant</div>
                <div>✅ Priority processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready for Express Placement?</h2>
            <p className="mb-8 text-xl opacity-90">Get hired in 15 days guaranteed or get your money back!</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition-all hover:scale-105">
                Start Express Service
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