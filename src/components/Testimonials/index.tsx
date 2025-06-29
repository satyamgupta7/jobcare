import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Software Engineer @TechCorp",
    content:
      "Job Care Consultancy transformed my career! Within 2 weeks, I landed my dream job as a Software Engineer. Their personalized approach and interview preparation were exceptional. Highly recommended!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    designation: "Marketing Manager @BrandPlus",
    content:
      "Outstanding service! The team at Job Care helped me transition from sales to marketing seamlessly. Their industry connections and salary negotiation support got me a 40% salary hike. Amazing experience!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Anjali Singh",
    designation: "HR Executive @GlobalTech",
    content:
      "Professional, reliable, and results-driven! Job Care Consultancy found me the perfect HR role that matches my skills perfectly. Their 24/7 support and career guidance made all the difference.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Amit Verma",
    designation: "Accountant @FinanceHub",
    content:
      "Best job consultancy in Patna! They understood my requirements and found me multiple opportunities. The entire process was smooth and transparent. Got placed within 10 days!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 5,
    name: "Neha Gupta",
    designation: "Data Analyst @DataTech",
    content:
      "Exceptional service quality! Job Care's team provided excellent career counseling and helped me switch from teaching to data analytics. Their support throughout the journey was incredible.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 6,
    name: "Vikash Jha",
    designation: "Store Manager @RetailMax",
    content:
      "Highly professional team! They helped me find a management role that perfectly fits my experience. The salary package exceeded my expectations. Thank you Job Care Consultancy!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            ⭐ Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how Job Care Consultancy has transformed careers and helped thousands of professionals find their dream jobs in Patna across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15 Days</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Placement Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
