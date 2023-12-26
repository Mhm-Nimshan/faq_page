import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import shape_1 from "../../../../public/assets/img/cta/cta-shape-5-1.svg";
import shape_2 from "../../../../public/assets/img/cta/cta-2.svg";

const business_content = {
    bg_img: "/assets/img/cta/bs-bg.png",
    sub_title: "Get a piece of what's trending",
    title: <><span>Invest Smart With<br />Digital Assets</span> </>,
    btn_text: "Get Started Now"

}
const {bg_img, sub_title, title, btn_text}  = business_content
const BusinessBox = () => {
    return (
        <>
        <div className="tp-cta-area pt-60 pb-120 mb-120 tp-cta-five-bg p-relative" style={{backgroundImage: `url(${bg_img})`}}>
               <div className="tp-cta-five-shape-1 d-md-block">
                  <Image src={shape_1} alt="amez-image" />
               </div> 
               <div className="tp-cta-five-shape-2 d-none d-md-block">
                  <Image src={shape_2} alt="amez-image" />
               </div> 
                  <div className="container-fluid g-0">
                     <div className="row g-0">
                        <div className="col-12">
                           <div className="tp-cta-five-section-box text-center">
                              <span className="tp-section-subtitle-5 pt-40">{sub_title}</span>
                              <h3 className="tp-section-title-5 pb-30">{title}</h3>
                              <div className="tp-cta-five-btn">
                                 <Link className="tp-btn-green" href="https://www.amezhub.com/">{btn_text}</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>            
        </>
    );
};

export default BusinessBox;