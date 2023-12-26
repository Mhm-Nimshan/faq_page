import Link from 'next/link';
import React from 'react';


const cta_content = {
   bg_img: "/assets/img/cta/cta-bg.png",
   title: "Freelance Hub Powered By Amez Cloud",
   info: <>Futuristic and AI powered freelance hub to find talents.</>,
   btn_text: "Coming Soon",
}
const {bg_img, title, info, btn_text}  = cta_content


const CtaArea = () => {
   return (
       <>
            <div className="tp-cta-area p-relative pt-50">
              <div className="tp-cta-grey-bg grey-bg-2"></div>
              <div className="container">
                 <div className="row">
                    <div className="col-12">
                       <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                          <div className="tp-cta-content text-center">
                             <h3 className="tp-section-title-lg text-white">{title}</h3>
                             <p className="tp-section-title-5 pb-30"><span>{info}</span></p>
                             <Link className="tp-btn-green" href="https://www.amezfreelance.com/">{btn_text}</Link>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
       </>
   );
};

export default CtaArea;