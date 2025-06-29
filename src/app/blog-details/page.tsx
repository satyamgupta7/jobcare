"use client";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 py-20 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10"></div>
        <div
          className="absolute bottom-1/4 left-1/4 h-80 w-80 animate-pulse rounded-full bg-slate-200/20 blur-3xl dark:bg-slate-500/10"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/#blog"
            className="mb-8 inline-flex items-center font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Article */}
          <article className="overflow-hidden rounded-2xl border border-gray-200/50 bg-white/90 shadow-xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/90">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/blog/blog-01.jpg"
                alt="Interview Tips"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  Career Tips
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Top 10 Interview Tips to Land Your Dream Job in Patna
              </h1>

              <div className="mb-8 flex items-center gap-6 border-b border-gray-200/50 pb-8 dark:border-gray-700/50">
                <div className="flex items-center">
                  <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-sm font-bold text-white">
                    PC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Priya Consultant
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Senior Career Advisor
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Dec 15, 2024
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p>
                  Landing your dream job in Patna competitive market requires
                  strategic preparation and professional presentation. Here are
                  proven strategies that have helped thousands secure their
                  ideal positions.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  1. Research the Company Thoroughly
                </h3>
                <p>
                  Spend 2-3 hours researching the company history, values, and
                  recent developments. Understanding their challenges allows you
                  to position yourself as a solution.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  2. Master the STAR Method
                </h3>
                <p>
                  Structure answers using Situation, Task, Action, Result
                  format. This helps provide concrete examples demonstrating
                  your capabilities effectively.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  3. Prepare Thoughtful Questions
                </h3>
                <p>
                  Ask about role expectations, team dynamics, and growth
                  opportunities. This demonstrates genuine interest and
                  commitment.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  4. Practice Your Elevator Pitch
                </h3>
                <p>
                  Develop a compelling 60-second summary of your background,
                  achievements, and goals. Practice until it feels natural.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  5. Professional Presentation
                </h3>
                <p>
                  Dress appropriately for Patna business culture. Professional
                  attire makes a strong first impression.
                </p>
              </div>

              <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:from-blue-900/20 dark:to-cyan-900/20">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  Need Personalized Career Guidance?
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Our expert consultants help you navigate your professional
                  journey with personalized advice.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-cyan-600"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
