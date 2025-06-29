import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  
  // Get initials from author name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Get gradient for author avatar
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500', 
    'from-green-500 to-emerald-500'
  ];
  const gradient = gradients[blog.id % gradients.length];

  return (
    <article className="group h-full">
      <div className="relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        {/* Image Section */}
        <Link href={`/blog-details?id=${blog.id}`} className="relative block">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Tag */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                {tags[0]}
              </span>
            </div>
          </div>
        </Link>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="mb-4">
            <Link
              href={`/blog-details?id=${blog.id}`}
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 line-clamp-2 leading-tight"
            >
              {title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 line-clamp-3">
            {paragraph}
          </p>

          {/* Author & Date */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center">
              {/* Author Avatar */}
              <div className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 shadow-lg`}>
                {getInitials(author.name)}
              </div>
              
              {/* Author Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {author.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {author.designation}
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="text-right">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {publishDate}
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-6">
            <Link
              href={`/blog-details?id=${blog.id}`}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors duration-300 group-hover:translate-x-1"
            >
              Read More
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </article>
  );
};

export default SingleBlog;