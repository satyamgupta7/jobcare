"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import jobsData from "@/data/jobs.json";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [counters, setCounters] = useState({
    jobs: 0,
    companies: 0,
    success: 0,
    industries: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const locations = [
    "Patna",
    "Muzaffarpur",
    "Hajipur",
    "Danapur",
    "Gaya",
    "Begusarai",
    "Samastipur",
    "Chapra",
    "Arrah",
    "Bihta",
  ];

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      const targets = {
        jobs: 5000,
        companies: 500,
        success: 98,
        industries: 15,
      };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          jobs: Math.floor(targets.jobs * progress),
          companies: Math.floor(targets.companies * progress),
          success: Math.floor(targets.success * progress),
          industries: Math.floor(targets.industries * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
          setHasAnimated(true);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [hasAnimated]);

  const handleSearch = () => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()),
    );
    setSearchResults(filtered);
    setShowResults(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 dark:from-gray-900 dark:via-slate-900 dark:to-black">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:60px_60px]"></div>
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs & Shapes */}
        <div className="absolute -top-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-3xl"></div>
        <div
          className="absolute -top-20 -right-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 h-64 w-64 animate-bounce rounded-full bg-gradient-to-r from-orange-300/25 to-yellow-300/25 blur-2xl"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute right-1/4 bottom-20 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/4 right-1/3 h-4 w-4 animate-ping rounded-full bg-blue-400/60"></div>
        <div
          className="absolute top-3/4 left-1/3 h-3 w-3 animate-ping rounded-full bg-cyan-400/60"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 h-2 w-2 animate-ping rounded-full bg-purple-400/60"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[length:50px_50px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-orange-50/50"></div>
      </div>

      <div className="relative container mx-auto flex min-h-screen items-center justify-center px-4 pt-24 pb-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/20 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 backdrop-blur-sm dark:bg-gray-800/30 dark:text-cyan-400">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            #1 Job Consultancy in Patna
          </div>

          <h1 className="mb-3 text-3xl leading-tight font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Find Your Dream Career Today
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
            Connect with 500+ top companies in Patna.
          </p>

          {/* Search Container */}
          <div className="relative z-50 mx-auto mb-6 max-w-4xl">
            <div className="rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-800/90">
              <div className="grid gap-4 md:grid-cols-3">
                {/* Job Title */}
                <div className="group relative">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Job Title
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
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
                      placeholder="e.g. Software Engineer, Accountant..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                {/* Location Dropdown */}
                <div className="group relative">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
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
                      placeholder="Select location..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onFocus={() => setShowLocationDropdown(true)}
                      onBlur={() =>
                        setTimeout(() => setShowLocationDropdown(false), 300)
                      }
                      className="w-full rounded-xl border-2 border-gray-200 bg-white py-3 pr-10 pl-12 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {showLocationDropdown && (
                      <div className="absolute top-full right-0 left-0 z-[99999] mt-1 max-h-60 overflow-auto rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-600 dark:bg-gray-700">
                        {locations
                          .filter((loc) =>
                            loc.toLowerCase().includes(location.toLowerCase()),
                          )
                          .map((loc, index) => (
                            <div
                              key={index}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setLocation(loc);
                                setShowLocationDropdown(false);
                              }}
                              className="cursor-pointer px-4 py-3 text-gray-900 hover:bg-blue-50 dark:text-white dark:hover:bg-gray-600"
                            >
                              {loc}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex flex-col justify-end">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    &nbsp;
                  </label>
                  <button
                    onClick={handleSearch}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <svg
                        className="mr-1.5 h-4 w-4"
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
                      Search Jobs
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                </div>
              </div>

              {/* Animated Stats Section */}
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-cyan-400 md:text-3xl">
                    {counters.jobs.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Jobs Placed
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-green-400 md:text-3xl">
                    {counters.companies}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Companies
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-purple-400 md:text-3xl">
                    {counters.success}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Success Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-orange-400 md:text-3xl">
                    {counters.industries}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Industries
                  </div>
                </div>
              </div>
            </div>

            {/* Search Results */}
            {showResults && (
              <div className="mt-4 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-800/90">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {searchResults.length} Jobs Found
                  </h3>
                  <button
                    onClick={() => setShowResults(false)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    Close Results
                  </button>
                </div>
                {searchResults.length > 0 ? (
                  <div className="max-h-80 space-y-3 overflow-y-auto">
                    {searchResults.map((job) => (
                      <div
                        key={job.id}
                        className="rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md dark:border-gray-600 dark:bg-gray-700/50"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex-1 text-left">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                              {job.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {job.company}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {job.location}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 sm:items-end">
                            <p className="text-sm font-semibold text-green-600">
                              {job.salary}
                            </p>
                            <Link
                              href="#contact"
                              className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                            >
                              Apply Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    No jobs found matching your criteria.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* CTA Buttons - Lower Z-index */}
          <div className="z-0 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="#about"
              className="rounded-xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
