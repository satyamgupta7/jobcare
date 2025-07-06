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
    <section className="bg-gradient-to-r from-slate-100 via-gray-50 to-slate-100 py-12 dark:from-gray-800 dark:via-slate-900 dark:to-gray-800">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Industries We Serve
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Connecting talent with opportunities across diverse sectors
          </p>
        </div>

        {/* Scrolling Industries */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll flex space-x-8">
            {[...industries, ...industries].map((industry, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <div className="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
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
          animation: scroll 8s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Industries;
