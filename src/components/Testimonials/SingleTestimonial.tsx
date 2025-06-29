import { Testimonial } from "@/types/testimonial";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow-400">
        {starIcon}
      </span>,
    );
  }

  // Get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Get random gradient for avatar
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500', 
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-teal-500 to-blue-500'
  ];
  const gradient = gradients[testimonial.id % gradients.length];

  return (
    <div className="group h-full">
      <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
        {/* Quote Icon */}
        <div className="absolute -top-4 left-6">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-4 pt-4">
          {ratingIcons}
        </div>

        {/* Content */}
        <blockquote className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 italic">
          &ldquo;{content}&rdquo;
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          {/* Avatar with Initials */}
          <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {getInitials(name)}
          </div>
          
          {/* Name and Designation */}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              {designation}
            </p>
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SingleTestimonial;