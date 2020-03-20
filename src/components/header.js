import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Name from "./Name";
import icon from "../images/icon.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
site.siteMetadata.title;
  return (
    <header className="bg-transparent">
      <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto p-4 md:p-4">
        <Link className="flex items-center no-underline text-comment" to="/">
          <img
            alt="Santiago Garcia Logo"
            className="sm:hidden w-16"
            src={icon}
          />
          <Name size="4xl" className="hidden sm:inline"/>
        </Link>

        <button
          className="block md:hidden border-2 border-comment flex items-center px-3 py-2 rounded text-comment"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/projects`,
              title: `Projects`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-lightWhite hover:text-purple"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
