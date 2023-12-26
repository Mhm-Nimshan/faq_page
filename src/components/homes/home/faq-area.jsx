import AnswerQuestion from './answer-question';
import NoticeTwo from '@/src/svg/notice-2';
import NiceSelect from "@/src/ui/nice-select";

import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
import img from "../../../../public/assets/img/faq/faq-1.png" 

const faq_content = {
    sub_title: "Amez Cloud",
    title: <>Help & Support</>,
    title_notice: <>Live chat with Amez Team will be available soon</>,
    categorys: [
      {id:1, category: "Amez Cloud", cls: "active", notice: "Amez"},
      {id:2, category: "Amez Wallet", cls: ""},
      {id:3, category: "Amez Cards", cls: ""},
      {id:4, category: "Amez Hub", cls: ""},
      {id:5, category: "AmezCare Plus", cls: ""},
      {id:6, category: "Amez Freelance", cls: ""},
      {id:7, category: "Amez Host Hub", cls: ""},
      {id:8, category: "Amez Express", cls: ""},
      {id:9, category: "Amez Organic", cls: ""},
      {id:10, category: "Amez Sellers", cls: ""},
      {id:11, category: "Amez Beta", cls: ""},

   ],
    btn_text: "Contact Support",

}
const {sub_title, title, categorys, btn_text, title_notice }  = faq_content
const selectHandler = (e) => {};

const FaqArea = ({style_service}) => {
    return (
        <>
            <div className="tp-faq-area pt-130 pb-60 fix">
               <div className="container">
                  <div className="row"> 
                     <div className="col-xl-9 col-lg-9">
                     <div className={`tp-faq-section-box ${style_service && "tp-inner-font tp-inner-faq-box"} pb-10`}>
                              <h3 className={`${style_service ? "tp-section-title" : "tp-section-title-support"}`}>{title}&nbsp;&nbsp;&nbsp;
                              <div className="tp-support-feature-tooltip-box p-relative">
                              <h4><i className="fas fa-info-circle"></i></h4>
                                    <div className="tp-support-feature-tooltip">
                                    <p>{title_notice}</p>
                                    </div>
                              </div>
                              </h3>
                              <div className="">
                                 <div className="faqselect__select">
                                 <NiceSelect
                                    options={[
                                       { value: "Your Inquiry about", text: "Your Inquiry about" },
                                       { value: "Amez Cloud", text: "Amez Cloud" },
                                       { value: "Amez Wallet", text: "Amez Wallet" },
                                       { value: "Amez Cards", text: "Amez Cards" },
                                       { value: "Amez Hub", text: "Amez Hub" },
                                       { value: "AmezCare Plus", text: "AmezCare Plus" },
                                       { value: "Amez Freelance", text: "Amez Freelance" },
                                       { value: "Amez Host Hub", text: "Amez Host Hub" },
                                       { value: "Amez Express", text: "Amez Express" },
                                       { value: "Amez Organic", text: "Amez Organic" },
                                       { value: "Amez Sellers", text: "Amez Sellers" },
                                       { value: "Amez Beta", text: "Amez Beta" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                 />
                                 </div>
                              </div>
                           </div>
                        <AnswerQuestion /> 
                        <div className="row pt-10">
                           <div className="support-pagination col-xl-6 col-lg-6">
                              <nav>
                                 <ul>
                                    <li>
                                       <Link href="#">
                                          <i className="far fa-angle-left"></i>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link className="current" href="#">1</Link>
                                    </li>
                                    <li>
                                       <Link href="#">2</Link>
                                    </li>
                                    <li>
                                       <Link href="#">3</Link>
                                    </li>
                                    <li>
                                       <Link href="#">4</Link>
                                    </li>
                                    <li>
                                       <Link href="#">5</Link>
                                    </li>
                                    <li>
                                       <Link href="#">6</Link>
                                    </li>
                                    <li>
                                       <span>...</span>
                                    </li>
                                    <li>
                                       <Link href="#">25</Link>
                                    </li>
                                    <li>
                                       <Link href="#">
                                          <i className="far fa-angle-right"></i>
                                       </Link>
                                    </li>
                                 </ul>
                                 </nav>
                                 
                           </div>
                           <div className="pt-20 pb-20 col-xl-6 col-lg-6">
                              <>&nbsp;Viewing 11–20 of 133 results</>
                           </div>
                        </div>
                     </div>
                     <div className={`col-xl-3 col-lg-3 support-box ${style_service && "wow tpfadeLeft"}`} 
                        data-wow-duration={style_service && ".9s"} 
                        data-wow-delay={style_service && ".4s"}>
                        <div className=" p-relative">
                              <div className="support-details-category-list">
                                 <ul>
                                 {categorys.map((item, i)  => 
                                       <li key={i} className={item.cls}>                                        
                                          <Link href="#">
                                          <span>{item.category}&nbsp;
                                             {/*<div className="tp-support-feature-tooltip-box p-relative">
                                                   <NoticeTwo />
                                                   <div className="tp-support-feature-tooltip">
                                                   <p>{item.notice !=null && <span className="">{ item.notice }</span>}</p>
                                                   
                                             </div>
                                             </div>*/}
                                             </span><i className="fal fa-angle-right"></i>
                                          </Link>
                                       </li>
                                       
                                 )} 
                                 </ul>
                              </div>
                           <div className="tp-faq-btn">
                           <div className='pt-20 pb-10'>&nbsp;24×7 help from our support team</div>
                              <Link className={`${style_service ? "tp-btn-inner tp-btn-hover alt-color-black" : "tp-btn-card"} `} 
                                  href="#">
                                    {btn_text}
                              </Link>
                              
                           </div>
                           <div className="tp-faq-img" data-parallax='{"x": -50, "smoothness": 30}'>
                              <Image src={img} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default FaqArea;