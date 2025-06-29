import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-slate-200/20 dark:bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            📚 Career Insights & Tips
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Latest Career Guidance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest job market trends, career tips, and industry insights to accelerate your professional growth in Patna.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
