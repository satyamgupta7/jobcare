import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Job Placement Services",
        path: "/services/job-placement",
        newTab: false,
      },
      {
        id: 42,
        title: "Interview Scheduling",
        path: "/services/interview-scheduling",
        newTab: false,
      },
      {
        id: 43,
        title: "Corporate Recruitment",
        path: "/services/corporate-recruitment",
        newTab: false,
      },
      {
        id: 44,
        title: "Express Placement",
        path: "/services/express-placement",
        newTab: false,
      },
    ],
  },
];
export default menuData;
