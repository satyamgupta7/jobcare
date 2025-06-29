import Image from "next/image";

const AboutSectionOne = () => {
  const List = ({ text, icon }) => (
    <div className="group mb-6 flex items-center transition-transform duration-300 hover:translate-x-2">
      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-lg font-medium text-gray-700 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400">
        {text}
      </p>
    </div>
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 py-20 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-orange-200/40 blur-3xl dark:bg-indigo-500/30"></div>
        <div
          className="absolute right-1/4 bottom-1/4 w-80 animate-pulse rounded-full bg-amber-200/40 blur-3xl dark:bg-purple-500/30"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                🏢 About Job Care Consultancy
              </div>
              <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-white dark:to-gray-300">
                Transforming Careers in Patna Since 2015
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                We are Patna most trusted job consultancy, dedicated to bridging
                the gap between talented professionals and leading companies.
                Our personalized approach and industry expertise have helped
                thousands achieve their career dreams.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <List text="Expert Career Counseling" icon="🎯" />
              <List text="Industry Partnerships" icon="🤝" />
              <List text="Personalized Job Matching" icon="⚡" />
              <List text="Interview Preparation" icon="💼" />
              <List text="Salary Negotiation Support" icon="💰" />
              <List text="24/7 Candidate Support" icon="🔄" />
            </div>

            <div className="mt-10 rounded-2xl border border-gray-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/80">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                To empower every job seeker in Patna with the right
                opportunities and support, while helping companies find the
                perfect talent to drive their success forward.
              </p>
            </div>
          </div>

          <div className="mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <div className="relative rounded-3xl border border-gray-200/50 bg-white/90 p-8 shadow-2xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/90">
                <div className="mb-8 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Our Success Story
                  </h3>
                  <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        2015
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Founded
                      </div>
                    </div>
                    <div className="text-3xl">🚀</div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-4 dark:from-green-900/20 dark:to-emerald-900/20">
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        5000+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Successful Placements
                      </div>
                    </div>
                    <div className="text-3xl">👥</div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:from-purple-900/20 dark:to-pink-900/20">
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        500+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Partner Companies
                      </div>
                    </div>
                    <div className="text-3xl">🏢</div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-50 to-red-50 p-4 dark:from-orange-900/20 dark:to-red-900/20">
                    <div>
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        98%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Success Rate
                      </div>
                    </div>
                    <div className="text-3xl">📈</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 animate-bounce rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 h-16 w-16 animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
