"use client";
import { useState, useEffect } from "react";

const features = [
  {
    icon: "🎯",
    title: "Personalized Job Matching",
    description:
      "AI-powered matching system connects you with perfect opportunities based on your skills and preferences.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🚀",
    title: "Fast Track Placement",
    description:
      "Average placement time of 15 days with our extensive network of 500+ partner companies.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    description:
      "Expert counselors provide comprehensive career planning and interview preparation support.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "📈",
    title: "Salary Negotiation",
    description:
      "Professional assistance in salary negotiations ensuring you get the best compensation package.",
    gradient: "from-orange-500 to-red-500",
  },
];

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span id={`counter-${target}`}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 py-20 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-orange-200/40 blur-3xl dark:bg-indigo-500/30"></div>
        <div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-amber-200/40 blur-3xl dark:bg-purple-500/30"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="animate-fade-in mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            ✨ Premium Job Consultancy Services
          </div>
          <h2 className="animate-fade-in-up mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-white dark:to-gray-300">
            Why Choose Job Care Consultancy?
          </h2>
          <p
            className="animate-fade-in-up mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your career with our proven expertise, personalized
            approach, and industry-leading success rate in Patna job market.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            {
              value: 98,
              suffix: "%",
              label: "Success Rate",
              color: "text-green-600",
            },
            {
              value: 5000,
              suffix: "+",
              label: "Jobs Placed",
              color: "text-blue-600",
            },
            {
              value: 500,
              suffix: "+",
              label: "Partner Companies",
              color: "text-purple-600",
            },
            {
              value: 15,
              suffix: "+",
              label: "Industry Sectors",
              color: "text-orange-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group animate-fade-in-up text-center"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div
                className={`text-4xl font-bold md:text-5xl ${stat.color} mb-2 transition-transform duration-300 group-hover:scale-110`}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in-up relative rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800/80"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div
                className={`h-16 w-16 bg-gradient-to-r ${feature.gradient} mb-4 flex items-center justify-center rounded-2xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Features;
