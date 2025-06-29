"use client";
import { useState, useEffect } from "react";

const features = [
  {
    icon: "🎯",
    title: "Personalized Job Matching",
    description: "AI-powered matching system connects you with perfect opportunities based on your skills and preferences.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🚀",
    title: "Fast Track Placement",
    description: "Average placement time of 15 days with our extensive network of 500+ partner companies.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "💼",
    title: "Career Guidance",
    description: "Expert counselors provide comprehensive career planning and interview preparation support.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: "📈",
    title: "Salary Negotiation",
    description: "Professional assistance in salary negotiations ensuring you get the best compensation package.",
    gradient: "from-orange-500 to-red-500"
  }
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
      { threshold: 0.1 }
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
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-br from-white via-orange-50 to-amber-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/40 dark:bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-200/40 dark:bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 animate-fade-in">
            ✨ Premium Job Consultancy Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            Why Choose Job Care Consultancy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Transform your career with our proven expertise, personalized approach, and industry-leading success rate in Patna's job market.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: 98, suffix: "%", label: "Success Rate", color: "text-green-600" },
            { value: 5000, suffix: "+", label: "Jobs Placed", color: "text-blue-600" },
            { value: 500, suffix: "+", label: "Partner Companies", color: "text-purple-600" },
            { value: 15, suffix: "+", label: "Industry Sectors", color: "text-orange-600" }
          ].map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${0.7 + index * 0.1}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
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
