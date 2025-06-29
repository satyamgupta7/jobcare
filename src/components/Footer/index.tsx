"use client";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/jobcare.patna?igsh=cGpsdmU5MG92Y3Zi",
    bgColor: "bg-blue-600/20 hover:bg-blue-600",
    Icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1hejUZ7BkA/",
    bgColor: "bg-blue-600/20 hover:bg-blue-600",
    Icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    bgColor: "bg-blue-600/20 hover:bg-blue-600",
    Icon: FaLinkedin,
  },
];

const quickLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#features", label: "Our Services" },
  { href: "/#blog", label: "Career Tips" },
  { href: "/#testimonials", label: "Success Stories" },
];

const services = [
  { href: "#job-placement", label: "Job Placement" },
  { href: "#career-counseling", label: "Career Counseling" },
  { href: "#resume-building", label: "Resume Building" },
  { href: "#salary-negotiation", label: "Salary Negotiation" },
];

const legalLinks = [
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms of Service" },
  { href: "#cookies", label: "Cookie Policy" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
        <div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-purple-500/20 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative container py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <div className="flex items-center space-x-2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                  Job Care
                </span>
                <span className="text-lg font-semibold text-purple-400">
                  Consultancy
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-md leading-relaxed text-gray-300">
              Patna premier job consultancy helping professionals find their
              dream careers since 2015. We connect talented individuals with
              leading companies across all industries.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`h-10 w-10 ${social.bgColor} flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              © 2024 Job Care Consultancy. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
