import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Amez Help & Support"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
