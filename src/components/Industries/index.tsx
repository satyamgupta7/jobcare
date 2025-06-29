"use client";
import Image from "next/image";

const industries = [
  { name: "Banking", image: "/images/industries/banking.jpg" },
  { name: "E-commerce", image: "/images/industries/E-commerce-Internet.png" },
  { name: "Education", image: "/images/industries/education.jpg" },
  { name: "Finance", image: "/images/industries/Finance.png" },
  { name: "Healthcare", image: "/images/industries/healthcare-pharma.jpg" },
  { name: "IT", image: "/images/industries/information-technology.jpg" },
  { name: "Infrastructure", image: "/images/industries/infrastructure.jpg" },
  { name: "Logistics", image: "/images/industries/logistics.jpg" },
  { name: "Real Estate", image: "/images/industries/real-estate.jpg" },
  { name: "Retail", image: "/images/industries/retail-store.jpg" },
];

const Industries = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-100 via-gray-50 to-slate-100 dark:from-gray-800 dark:via-slate-900 dark:to-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Connecting talent with opportunities across diverse sectors
          </p>
        </div>
        
        {/* Scrolling Industries */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...industries, ...industries].map((industry, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Industries;