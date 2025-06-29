"use client";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPage = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-slate-200/20 dark:bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/#blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article */}
          <article className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image 
                src="/images/blog/blog-01.jpg" 
                alt="Interview Tips" 
                fill 
                className="object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                  Career Tips
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Top 10 Interview Tips to Land Your Dream Job in Patna
              </h1>
              
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    PC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Priya Consultant</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Senior Career Advisor</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p>Landing your dream job in Patna's competitive market requires strategic preparation and professional presentation. Here are proven strategies that have helped thousands secure their ideal positions.</p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Research the Company Thoroughly</h3>
                <p>Spend 2-3 hours researching the company's history, values, and recent developments. Understanding their challenges allows you to position yourself as a solution.</p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Master the STAR Method</h3>
                <p>Structure answers using Situation, Task, Action, Result format. This helps provide concrete examples demonstrating your capabilities effectively.</p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Prepare Thoughtful Questions</h3>
                <p>Ask about role expectations, team dynamics, and growth opportunities. This demonstrates genuine interest and commitment.</p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Practice Your Elevator Pitch</h3>
                <p>Develop a compelling 60-second summary of your background, achievements, and goals. Practice until it feels natural.</p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Professional Presentation</h3>
                <p>Dress appropriately for Patna's business culture. Professional attire makes a strong first impression.</p>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Need Personalized Career Guidance?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our expert consultants help you navigate your professional journey with personalized advice.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
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