import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children, justify = "justify-center" }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-lightWhite bg-darkpurple">
      <Header />
      <main className={`flex flex-col flex-1 md:${justify} max-w-4xl mx-auto px-4 py-8 md:p-8 w-full`}>
        {children}
      </main>

      <footer className="bg-dark">
        <nav className="flex justify-center max-w-4xl mx-auto p-2 md:p-2 text-sm">
          <p className="text-white">
            © {(new Date).getFullYear()+` `}
            <a
              className="font-bold no-underline text-white"
              href="https://santigarcor.me"
            >
              Santiago Garcia
            </a>
            . Made with Gatsby and ♥
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
};

export default Layout;
