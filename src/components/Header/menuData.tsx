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
        title: "BPO Jobs",
        path: "/services/bpo",
        newTab: false,
      },
      {
        id: 42,
        title: "IT Jobs",
        path: "/services/it",
        newTab: false,
      },
      {
        id: 43,
        title: "Banking Jobs",
        path: "/services/banking",
        newTab: false,
      },
      {
        id: 44,
        title: "Education Jobs",
        path: "/services/education",
        newTab: false,
      },
      {
        id: 45,
        title: "Real Estate Jobs",
        path: "/services/real-estate",
        newTab: false,
      },
      {
        id: 46,
        title: "Accounting Jobs",
        path: "/services/accounting",
        newTab: false,
      },
      {
        id: 47,
        title: "Healthcare Jobs",
        path: "/services/healthcare",
        newTab: false,
      },
    ],
  },
];
export default menuData;
