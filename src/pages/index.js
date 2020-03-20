import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Name from "../components/Name";
import TwitterIcon  from "../components/Icons/TwitterIcon";
import GithubIcon  from "../components/Icons/GithubIcon";
import LinkedInIcon  from "../components/Icons/LinkedInIcon";
import MailIcon  from "../components/Icons/MailIcon";

import profilePicture from "../images/foto.jpg";

const socialNetworks = [
    { icon: (<GithubIcon/>), link: 'https://github.com/santigarcor'},
    { icon: (<TwitterIcon/>), link: 'https://twitter.com/santigarcor'},
    { icon: (<LinkedInIcon/>), link: 'https://www.linkedin.com/in/santigarcor'},
    { icon: (<MailIcon/>), link: 'mailto:contacto@santigarcor.me'},
  ];

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Santiago Garcia`, `Software developer`, `Laratrust Maintainer`, `Programmer`, `Medellin`, `Laravel enthusiast`, `Full-stack developer`]}
        ogDescription="Santiago Garcia Corrales a Web Developer from Medellin, Colombia. Traveler and Laravel enthusiast."
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Profile picture"
          className="block mx-auto w-1/4 rounded-full border-none antialiased"
          src={profilePicture}
        />

        <h2 className="bg-yellow-400 text-3xl font-bold inline-block my-8 p-3">
          Hey there I&apos;m {<Name size="3xl"/>}. 🖖
        </h2>

        <p className="leading-loose font-body text-2xl">
          A passionate Web Developer 👨🏻‍💻 and Laravel enthusiast.
          <br />
          Check some of my projects.
          <br />
          You can get in touch through my social media.
        </p>

        <div className="flex justify-between mt-8 text-4xl text-purple mx-auto max-w-xs">
          {socialNetworks.map((item, i) => (<a key={i} href={item.link}>{item.icon}</a>))}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
