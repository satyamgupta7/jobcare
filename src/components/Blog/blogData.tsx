import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Top 10 Interview Tips to Land Your Dream Job in Patna",
    paragraph:
      "Master the art of interviews with proven strategies that have helped thousands of candidates secure their ideal positions. Learn how to research companies, prepare compelling answers, handle difficult questions, and make lasting impressions that lead to job offers.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Priya Consultant",
      image: "/images/blog/author-01.png",
      designation: "Senior Career Advisor",
    },
    tags: ["Interview Tips"],
    publishDate: "Dec 2024",
  },
  {
    id: 2,
    title: "Salary Negotiation Strategies That Actually Work",
    paragraph:
      "Discover professional techniques to negotiate better compensation packages and maximize your earning potential. Learn market research methods, timing strategies, and communication tactics that help you secure the salary you deserve without jeopardizing job offers.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Rajesh Kumar",
      image: "/images/blog/author-02.png",
      designation: "HR Specialist",
    },
    tags: ["Salary Guide"],
    publishDate: "Nov 2024",
  },
  {
    id: 3,
    title: "Career Transition Guide: Switching Industries Successfully",
    paragraph:
      "Complete roadmap for professionals looking to change career paths. Includes skill gap analysis, networking strategies, resume repositioning, and market positioning techniques. Learn how to leverage transferable skills and build credibility in new industries.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Anjali Singh",
      image: "/images/blog/author-03.png",
      designation: "Career Transition Expert",
    },
    tags: ["Career Change"],
    publishDate: "Oct 2024",
  },
];
export default blogData;
