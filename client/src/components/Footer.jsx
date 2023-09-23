import React from "react";

const links = [
  {
    title: "Privacy",
    href: "#",
  },
  {
    title: "Terms",
    href: "#",
  },
  {
    title: "Company Details",
    href: "#",
  },
  {
    title: "Mail us",
    href: "#",
  },
];

const socials = [
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
];

const pageLinks = [
  {
    title: "Home",
    href: "Home",
  },
  {
    title: "Cart",
    href: "/cart",
  },
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Register",
    href: "/register",
  },
];

const Footer = () => (
  <footer className="py-5 footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1>Sitemap</h1>
          <ul className="list-unstyled">
            {pageLinks.map((page) => (
              <li key={page.title}>
                <a href={page.href} className="text-decoration-none">
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h1>Links</h1>
          <ul className="list-unstyled">
            {links.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="text-decoration-none">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h1>Socials</h1>
          <ul className="list-unstyled">
            {socials.map((social) => (
              <li key={social.title}>
                <a href={social.href} className="text-decoration-none">
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <p className="text-center mt-4">
      &copy; 2023 <span className="orange">cakeFactory Inc.</span>
    </p>
  </footer>
);

export default Footer;
