import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="flex justify-center flex-col items-center">
        {/* <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        /> */}
        <img
          alt="Not here"
          className="block mx-auto w-1/2"
          src="https://media.giphy.com/media/3oKIPoNWeba1c7SwVO/giphy-downsized.gif"
        />
        <h2 className="bg-yellow-400 text-2xl font-bold my-8 p-3">
          Not this way...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
