import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interview Scheduling Services - Job Care Consultancy Patna",
  description: "Professional interview coordination and scheduling services. We handle the entire interview process between candidates and employers seamlessly.",
};

export default function InterviewSchedulingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-24 pb-16 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.1)_0%,transparent_50%)]"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <span className="mr-2">📅</span>
              Professional Interview Coordination
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Seamless <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Interview Scheduling</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              We handle the entire interview process coordination between you and employers. No more back-and-forth emails or missed opportunities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="#contact" className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105">
                Schedule Your Interview
              </Link>
              <Link href="#how-it-works" className="rounded-xl border-2 border-green-600 px-8 py-4 font-semibold text-green-600 transition-all hover:bg-green-50 dark:border-green-400 dark:text-green-400">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Why Choose Our Interview Scheduling?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900/30">⏰</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Time Saving</h3>
              <p className="text-gray-600 dark:text-gray-400">No more endless email chains. We coordinate everything for you.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl dark:bg-blue-900/30">🎯</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Perfect Timing</h3>
              <p className="text-gray-600 dark:text-gray-400">We find the best time slots that work for both parties.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl dark:bg-purple-900/30">📞</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Professional Coordination</h3>
              <p className="text-gray-600 dark:text-gray-400">Maintain professional communication throughout the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Interview Coordination Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simple, professional, and efficient</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">1</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Initial Coordination</h3>
                  <p className="text-gray-600 dark:text-gray-400">We receive interview requests from employers and match them with suitable candidates.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">2</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Availability Check</h3>
                  <p className="text-gray-600 dark:text-gray-400">We contact candidates to check their availability and preferred time slots.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">3</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Schedule Confirmation</h3>
                  <p className="text-gray-600 dark:text-gray-400">We coordinate with employers and confirm the final interview schedule.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">4</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Reminders & Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">We send reminders and provide support throughout the interview process.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 p-8 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="text-center">
                  <div className="mb-4 text-6xl">📅</div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Hassle-Free Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-400">Let us handle the coordination while you focus on preparing for your interview.</p>
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
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">What We Handle For You</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "📧", title: "Email Coordination", desc: "Professional email communication with all parties" },
              { icon: "📞", title: "Phone Coordination", desc: "Direct phone calls to confirm schedules and details" },
              { icon: "⏰", title: "Time Management", desc: "Finding optimal time slots for all participants" },
              { icon: "📍", title: "Venue Coordination", desc: "Arranging interview locations and logistics" },
              { icon: "🔔", title: "Reminders", desc: "Timely reminders to candidates and employers" },
              { icon: "📋", title: "Documentation", desc: "Maintaining records of all interview schedules" }
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

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Schedule Your Interview?</h2>
            <p className="mb-8 text-xl opacity-90">Let us handle the coordination while you focus on landing your dream job</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-xl bg-white px-8 py-4 font-semibold text-green-600 transition-all hover:scale-105">
                Get Started Today
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