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
      "Exceptional service quality! Job Care team provided excellent career counseling and helped me switch from teaching to data analytics. Their support throughout the journey was incredible.",
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/20"></div>
        <div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-500/20"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            ⭐ Client Success Stories
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl dark:from-white dark:to-gray-300">
            What Our Clients Say About Us
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Discover how Job Care Consultancy has transformed careers and helped
            thousands of professionals find their dream jobs in Patna across all
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                4.9/5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
                1000+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                15 Days
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Avg. Placement Time
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
