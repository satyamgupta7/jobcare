"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-50 bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300 dark:bg-slate-900/95"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-auto max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block ${
                sticky ? "py-4 lg:py-3" : "py-6"
              } `}
            >
              <div className="flex items-center space-x-3">
                {/* Logo Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2V4c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM8 4h8v2H8V4zm12 15H4V8h16v11z"/>
                    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                  </svg>
                </div>
                
                {/* Company Name */}
                <div className="flex flex-col">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-bold text-transparent dark:from-blue-400 dark:to-cyan-400">
                    JobCare
                  </span>
                  <span className="-mt-1 text-xs font-medium tracking-wider text-gray-600 dark:text-gray-400">
                    CONSULTANCY
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[280px] rounded-xl border border-gray-200/20 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-md duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:border-gray-700/30 dark:bg-slate-900/95 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-8">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`relative flex py-3 text-base font-medium transition-all duration-200 lg:mr-0 lg:inline-flex lg:px-4 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-cyan-600 lg:after:absolute lg:after:bottom-4 lg:after:left-1/2 lg:after:h-0.5 lg:after:w-1/2 lg:after:-translate-x-1/2 lg:after:bg-gradient-to-r lg:after:from-cyan-500 lg:after:to-blue-500 dark:text-cyan-400"
                              : "text-slate-700 hover:text-cyan-600 lg:hover:after:absolute lg:hover:after:bottom-4 lg:hover:after:left-1/2 lg:hover:after:h-0.5 lg:hover:after:w-0 lg:hover:after:w-1/2 lg:hover:after:-translate-x-1/2 lg:hover:after:bg-gradient-to-r lg:hover:after:from-cyan-500 lg:hover:after:to-blue-500 lg:hover:after:transition-all lg:hover:after:duration-300 dark:text-gray-300 dark:hover:text-cyan-400"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="relative flex cursor-pointer items-center justify-between py-3 text-base font-medium text-slate-700 transition-all duration-200 hover:text-cyan-600 lg:mr-0 lg:inline-flex lg:px-4 lg:py-6 lg:hover:after:absolute lg:hover:after:bottom-4 lg:hover:after:left-1/2 lg:hover:after:h-0.5 lg:hover:after:w-0 lg:hover:after:w-1/2 lg:hover:after:-translate-x-1/2 lg:hover:after:bg-gradient-to-r lg:hover:after:from-cyan-500 lg:hover:after:to-blue-500 lg:hover:after:transition-all lg:hover:after:duration-300 dark:text-gray-300 dark:hover:text-cyan-400"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                className={`transition-transform duration-200 group-hover:rotate-180 ${
                                  openIndex === index ? "rotate-180" : ""
                                }`}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative top-full left-0 rounded-xl bg-white/95 backdrop-blur-md transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[220px] lg:border lg:border-gray-200/20 lg:p-3 lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:top-full dark:bg-slate-900/95 dark:lg:border-gray-700/30 ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem, index) => (
                              <Link
                                href={submenuItem.path}
                                key={index}
                                onClick={() => setOpenIndex(-1)}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:translate-x-1 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-600 dark:text-gray-400 dark:hover:bg-gradient-to-r dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 dark:hover:text-cyan-400"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end space-x-4 pr-16 lg:pr-0">
              <Link
                href="/signup"
                className="hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl md:block"
              >
                Get Started
              </Link>
              <div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
