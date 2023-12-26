import FooterTwo from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header";
import React from "react";
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import BusinessBox from "./business-box";
import ContactInner from "./contact-inner";
import OfficeLocation from "./office-location";

const HomeTwo = () => {
  return (
    <>

      <HeaderTwo />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix"> 
      <FaqArea />
      <BusinessBox />
      <ContactInner />
      <OfficeLocation />
      <CtaArea /> 
      </main>
      <FooterTwo />
      </div>
      </div>

    </>
  );
};

export default HomeTwo;
