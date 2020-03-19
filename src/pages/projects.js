import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ProjectsPage() {
  return (
    <Layout justify="align-baseline">
      <SEO
        keywords={[`Santiago Garcia`, `Software developer`, `Laratrust Maintainer`, `Programmer`, `Medellin`, `Laravel enthusiast`, `Full-stack developer`]}
        title="Projects"
      />

      <section className="self-center">
        <h1 className="text-3xl font-bold text-lightWhite inline-block my-8 p-3">
          Projects
          <hr className="mt-2 w-3/4 mx-auto border-2 border-cyan"/>
        </h1>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
