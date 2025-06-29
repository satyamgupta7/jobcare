import Image from "next/image";

const AboutSectionOne = () => {
  const List = ({ text, icon }) => (
    <div className="mb-6 flex items-center group hover:translate-x-2 transition-transform duration-300">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-lg font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {text}
      </p>
    </div>
  );

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-white via-orange-50 to-amber-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/40 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 w-80 bg-amber-200/40 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                🏢 About Job Care Consultancy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
                Transforming Careers in Patna Since 2015
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We are Patna's most trusted job consultancy, dedicated to bridging the gap between talented professionals and leading companies. Our personalized approach and industry expertise have helped thousands achieve their career dreams.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <List text="Expert Career Counseling" icon="🎯" />
              <List text="Industry Partnerships" icon="🤝" />
              <List text="Personalized Job Matching" icon="⚡" />
              <List text="Interview Preparation" icon="💼" />
              <List text="Salary Negotiation Support" icon="💰" />
              <List text="24/7 Candidate Support" icon="🔄" />
            </div>

            <div className="mt-10 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower every job seeker in Patna with the right opportunities and support, while helping companies find the perfect talent to drive their success forward.
              </p>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Success Story</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2015</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
                    </div>
                    <div className="text-3xl">🚀</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">5000+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Successful Placements</div>
                    </div>
                    <div className="text-3xl">👥</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Partner Companies</div>
                    </div>
                    <div className="text-3xl">🏢</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">98%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-3xl">📈</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;