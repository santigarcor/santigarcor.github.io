import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const projects = [
  {
    name: 'Laratrust',
    description: 'Laravel role-based access control package',
    imgUrl: 'https://laratrust.santigarcor.me/logo.svg',
    tags: ['Laravel', 'PHP'],
    url: 'https://laratrust.santigarcor.me/',
  },
];

function ProjectsPage() {
  return (
    <Layout justify="align-baseline">
      <SEO
        keywords={[`Santiago Garcia`, `Software developer`, `Laratrust Maintainer`, `Programmer`, `Medellin`, `Laravel enthusiast`, `Full-stack developer`]}
        title="Projects"
      />

      <section className="self-center inline-block text-center w-full">
        <h1 className="text-4xl font-bold text-lightWhite mx-auto inline-block my-8 p-3">
          Projects
          <hr className="mt-2 w-3/4 mx-auto border-2 border-cyan"/>
        </h1>

        {
          projects.map(project => (
            <a
              key={project.name}
              href={project.url}
              className="relative mb-4 w-full h-48 sm:w-3/5 flex justify-start mx-auto bg-darkpurple border-lightWhite border-2 p-6 hover:border-purple"
            >
              <img
                className="block w-3/12 border-none antialiased mr-6"
                src={project.imgUrl}
              />
              <div className="block text-left">
                <h4 className="font-sans text-3xl font-bold">{project.name}</h4>
                <div className="font-body text-lg">{project.description}</div>
                <div className="flex justify-start font-body font-semibold text-xs mt-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-dark py-1 px-2 mr-2">{tag}</span>)
                  )}
                </div>
              </div>
            </a>
          ))
        }

      </section>
    </Layout>
  );
}

export default ProjectsPage;
