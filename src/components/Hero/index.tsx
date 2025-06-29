"use client";
import Link from "next/link";
import { useState } from "react";

const sampleJobs = [
  // Software Engineer - Different Experience Levels
  {
    id: 1,
    title: "Software Engineer (Fresher)",
    company: "TechCorp",
    location: "Patna",
    salary: "₹25,000/month",
  },
  {
    id: 2,
    title: "Software Engineer (2-3 Years)",
    company: "InfoTech",
    location: "Patna",
    salary: "₹35,000/month",
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    company: "DevSolutions",
    location: "Patna",
    salary: "₹45,000/month",
  },
  {
    id: 4,
    title: "Lead Software Engineer",
    company: "TechCorp",
    location: "Patna",
    salary: "₹55,000/month",
  },

  // Accountant - Different Experience Levels
  {
    id: 5,
    title: "Junior Accountant",
    company: "FinanceHub",
    location: "Patna",
    salary: "₹18,000/month",
  },
  {
    id: 6,
    title: "Accountant (2-3 Years)",
    company: "AccountPro",
    location: "Patna",
    salary: "₹25,000/month",
  },
  {
    id: 7,
    title: "Senior Accountant",
    company: "FinanceHub",
    location: "Patna",
    salary: "₹35,000/month",
  },
  {
    id: 8,
    title: "Chief Accountant",
    company: "MoneyMatters",
    location: "Patna",
    salary: "₹45,000/month",
  },

  // Marketing Manager - Different Experience Levels
  {
    id: 9,
    title: "Marketing Executive",
    company: "BrandPlus",
    location: "Patna",
    salary: "₹20,000/month",
  },
  {
    id: 10,
    title: "Marketing Officer",
    company: "AdAgency",
    location: "Patna",
    salary: "₹28,000/month",
  },
  {
    id: 11,
    title: "Marketing Manager",
    company: "BrandPlus",
    location: "Patna",
    salary: "₹40,000/month",
  },
  {
    id: 12,
    title: "Senior Marketing Manager",
    company: "MarketPro",
    location: "Patna",
    salary: "₹50,000/month",
  },

  // HR Executive - Different Experience Levels
  {
    id: 13,
    title: "HR Assistant",
    company: "GlobalTech",
    location: "Patna",
    salary: "₹15,000/month",
  },
  {
    id: 14,
    title: "HR Executive",
    company: "PeopleFirst",
    location: "Patna",
    salary: "₹22,000/month",
  },
  {
    id: 15,
    title: "HR Manager",
    company: "GlobalTech",
    location: "Patna",
    salary: "₹35,000/month",
  },
  {
    id: 16,
    title: "HR Head",
    company: "TalentCorp",
    location: "Patna",
    salary: "₹48,000/month",
  },

  // Data Entry - Different Experience Levels
  {
    id: 17,
    title: "Data Entry Operator (Fresher)",
    company: "InfoSystems",
    location: "Patna",
    salary: "₹12,000/month",
  },
  {
    id: 18,
    title: "Data Entry Operator (1-2 Years)",
    company: "DataCorp",
    location: "Patna",
    salary: "₹15,000/month",
  },
  {
    id: 19,
    title: "Senior Data Entry Operator",
    company: "InfoSystems",
    location: "Patna",
    salary: "₹18,000/month",
  },
  {
    id: 20,
    title: "Data Entry Supervisor",
    company: "DataHub",
    location: "Patna",
    salary: "₹25,000/month",
  },

  // Receptionist - Different Experience Levels
  {
    id: 21,
    title: "Receptionist (Fresher)",
    company: "MediCare Hospital",
    location: "Patna",
    salary: "₹12,000/month",
  },
  {
    id: 22,
    title: "Receptionist (1-2 Years)",
    company: "OfficeSpace",
    location: "Patna",
    salary: "₹15,000/month",
  },
  {
    id: 23,
    title: "Senior Receptionist",
    company: "CorporateHub",
    location: "Patna",
    salary: "₹18,000/month",
  },
  {
    id: 24,
    title: "Front Office Executive",
    company: "BusinessCenter",
    location: "Patna",
    salary: "₹22,000/month",
  },

  // Telecaller - Different Experience Levels
  {
    id: 25,
    title: "Telecaller (Fresher)",
    company: "CallCenter Pro",
    location: "Patna",
    salary: "₹10,000/month",
  },
  {
    id: 26,
    title: "Telecaller (1-2 Years)",
    company: "TeleServices",
    location: "Patna",
    salary: "₹13,000/month",
  },
  {
    id: 27,
    title: "Senior Telecaller",
    company: "CallCenter Pro",
    location: "Patna",
    salary: "₹16,000/month",
  },
  {
    id: 28,
    title: "Team Leader - Telecalling",
    company: "PhoneHub",
    location: "Patna",
    salary: "₹22,000/month",
  },

  // Sales Executive - Different Experience Levels
  {
    id: 29,
    title: "Sales Executive (Fresher)",
    company: "SalesForce Ltd",
    location: "Patna",
    salary: "₹15,000/month",
  },
  {
    id: 30,
    title: "Sales Executive (2-3 Years)",
    company: "SellWell",
    location: "Patna",
    salary: "₹20,000/month",
  },
  {
    id: 31,
    title: "Senior Sales Executive",
    company: "SalesForce Ltd",
    location: "Patna",
    salary: "₹28,000/month",
  },
  {
    id: 32,
    title: "Sales Manager",
    company: "SalesHub",
    location: "Patna",
    salary: "₹40,000/month",
  },

  // Store Manager - Different Experience Levels
  {
    id: 33,
    title: "Store Assistant",
    company: "RetailMax",
    location: "Patna",
    salary: "₹12,000/month",
  },
  {
    id: 34,
    title: "Store Executive",
    company: "ShopEasy",
    location: "Patna",
    salary: "₹18,000/month",
  },
  {
    id: 35,
    title: "Store Manager",
    company: "RetailMax",
    location: "Patna",
    salary: "₹30,000/month",
  },
  {
    id: 36,
    title: "Regional Store Manager",
    company: "MegaStore",
    location: "Patna",
    salary: "₹45,000/month",
  },

  // Driver - Different Experience Levels
  {
    id: 37,
    title: "Driver (Light Vehicle)",
    company: "LogiTrans",
    location: "Patna",
    salary: "₹15,000/month",
  },
  {
    id: 38,
    title: "Driver (Heavy Vehicle)",
    company: "TransCorp",
    location: "Patna",
    salary: "₹20,000/month",
  },
  {
    id: 39,
    title: "Senior Driver",
    company: "LogiTrans",
    location: "Patna",
    salary: "₹25,000/month",
  },
  {
    id: 40,
    title: "Driver Supervisor",
    company: "FleetManage",
    location: "Patna",
    salary: "₹30,000/month",
  },

  // Additional Jobs
  {
    id: 41,
    title: "Bank Officer",
    company: "PatnaBank",
    location: "Patna",
    salary: "₹35,000/month",
  },
  {
    id: 42,
    title: "Assistant Accountant",
    company: "FinanceHub",
    location: "Patna",
    salary: "₹20,000/month",
  },
  {
    id: 43,
    title: "Customer Service Representative",
    company: "ServiceDesk",
    location: "Patna",
    salary: "₹16,000/month",
  },
  {
    id: 44,
    title: "Office Assistant",
    company: "AdminCorp",
    location: "Patna",
    salary: "₹14,000/month",
  },
  {
    id: 45,
    title: "Security Guard",
    company: "SecureTech",
    location: "Patna",
    salary: "₹12,000/month",
  },
  {
    id: 46,
    title: "Cashier",
    company: "RetailMax",
    location: "Patna",
    salary: "₹13,000/month",
  },
  {
    id: 47,
    title: "Warehouse Executive",
    company: "LogiTrans",
    location: "Patna",
    salary: "₹18,000/month",
  },
  {
    id: 48,
    title: "Teacher",
    company: "EduCare School",
    location: "Patna",
    salary: "₹25,000/month",
  },
  {
    id: 49,
    title: "Nurse",
    company: "MediCare Hospital",
    location: "Patna",
    salary: "₹22,000/month",
  },
  {
    id: 50,
    title: "Computer Operator",
    company: "InfoSystems",
    location: "Patna",
    salary: "₹16,000/month",
  },
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    const filtered = sampleJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()),
    );
    setSearchResults(filtered);
    setShowResults(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-slate-900 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div
          className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-bounce rounded-full bg-blue-500/10 blur-2xl"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative container mx-auto flex min-h-screen items-center justify-center px-4 pt-24 pb-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/20 bg-white/10 dark:bg-gray-800/30 px-4 py-2 text-sm font-semibold text-cyan-300 dark:text-cyan-400 backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            #1 Job Consultancy in Patna
          </div>

          {/* Main Heading */}
          <h1 className="mb-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            Find Your Dream Career Today
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Connect with 500+ top companies in Patna. Get personalized career
            guidance and land your perfect job.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-4 max-w-3xl rounded-2xl bg-white/95 dark:bg-gray-800/95 p-4 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Job title, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 py-4 pr-4 pl-10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 py-4 pr-4 pl-10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={handleSearch}
                className="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                Search Jobs
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-cyan-400 md:text-3xl">
                5000+
              </div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Jobs Placed</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-green-400 md:text-3xl">
                500+
              </div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Companies</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-purple-400 md:text-3xl">
                98%
              </div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-orange-400 md:text-3xl">
                15+
              </div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Industries</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="transform rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700"
            >
              Get Free Consultation
            </Link>
            <Link
              href="#about"
              className="rounded-xl border-2 border-white/30 dark:border-gray-600/50 px-8 py-4 font-semibold text-white dark:text-gray-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/20"
            >
              Learn More
            </Link>
          </div>

          {/* Search Results */}
          {showResults && (
            <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white/95 dark:bg-gray-800/95 p-6 shadow-2xl backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {searchResults.length} Jobs Found
              </h3>
              {searchResults.length > 0 ? (
                <div className="max-h-96 space-y-4 overflow-y-auto">
                  {searchResults.map((job) => (
                    <div
                      key={job.id}
                      className="rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700/50 p-4 transition-shadow hover:shadow-md"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1 text-left">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {job.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2 text-left">{job.company}</p>
                          <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <svg
                              className="mr-1 h-4 w-4 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                            </svg>
                            {job.location}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <p className="font-semibold text-green-600 text-lg">
                            {job.salary}
                          </p>
                          <Link
                            href="#contact"
                            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 w-full sm:w-auto text-center inline-block"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-8 text-center text-gray-600 dark:text-gray-400">
                  No jobs found matching your criteria. Try different keywords
                  or location.
                </p>
              )}
              <button
                onClick={() => setShowResults(false)}
                className="mt-4 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Close Results
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
