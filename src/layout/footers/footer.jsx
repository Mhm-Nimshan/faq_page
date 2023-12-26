import { CopyRight } from '@/src/common/social-links';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
// img import 
import footer_logo from "../../../public/assets/img/logo/logo-black.svg";
import qr_code from "../../../public/assets/img/footer/qr.svg";
import i_phone from "../../../public/assets/img/footer/1.svg";
import google_ply from "../../../public/assets/img/footer/2.svg"; 


const footer_content = {
    address: <>169 Madison Ave STE 2617<br />
    New York, USA</>,
    phone: "+1 (540) 900 0666",
    email: "info@amezcloud.com",
    download: "Download App", 
    footer_lisks : [
        {
            id: 1,
            cls: "footer-col-2-2", 
            title: "Solutions",
            delay: ".5s",
            links: [
                {name: "Amez Wallet", link: "https://www.amezwallet.com/"},
                {name: "Amez Cards", link: "https://www.amezcards.com/"},
                {name: "Amez Hub", link: "https://www.amezhub.com/"},
                {name: "AmezCare Plus", link: "https://www.amezcareplus.com/"},
                {name: "Amez Status", link: "https://status.amezcloud.com/"},
            ]
        },
        {
            id: 2,
            cls: "footer-col-2-3", 
            title: "Amez Legal",
            delay: ".7s",
            links: [
                {name: "Terms of Use", link: "https://legal.amezcloud.com/terms.html"},
                {name: "Privacy Policy", link: "https://legal.amezcloud.com/privacy.html"},
                {name: "Sales and Refunds", link: "https://legal.amezcloud.com/sales_refunds.html"},
                {name: "Intellectual Property", link: "https://legal.amezcloud.com/intellectual.html"},
                {name: "Subscription Agreement", link: "https://legal.amezcloud.com/subscription.html"},
            ]
        },

    ],
    social_links : [
        {
          link: "https://www.facebook.com/amezcloud",
          target: "_blank",
          icon: "fab fa-facebook-f", 
        },
        {
          link: "https://www.instagram.com/amezcloud/",
          target: "_blank",
          icon: "fab fa-instagram", 
        },
        {
          link: "https://www.linkedin.com/company/amezcloud/",
          target: "_blank",
          icon: "fab fa-linkedin", 
        }, 
        {
          link: "https://whatsapp.com/channel/0029VaChvG2JUM2SPbC3642C",
          target: "_blank",
          icon: "fab fa-whatsapp", 
        },
      ], 
}
const {address, phone, email, footer_lisks, download, social_links}  =  footer_content

const FooterTwo = () => {
    const [isOppen , setIsOppen]  = useState(false)
    const oppenLan = () => {
        setIsOppen(!isOppen)
    }
    return (
        <>
    <footer> 
    <div className="tp-footer__pl-pr grey-bg-2">
      <div className="tp-footer__area pt-90 tp-footer__tp-border-bottom">
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                     <div className="tp-footer__logo mb-25">
                        <Link href="/">
                           <Image src={footer_logo} alt="them-pure"/>
                        </Link>
                     </div>
                     <div className="tp-footer__contact-info">
                        <Link href="#"
                           target="_blank">{address}</Link>
                        <ul>
                           <li>
                              <span>
                              <i className="fas fa-headset"></i>
                              </span>
                              <Link className="" href={`https://wa.me/15409000666`}>{phone}</Link>
                           </li>
                           <li>
                              <span>
                              <i className="fas fa-comment"></i>
                              </span>
                              <Link href={`mailto:${email}`}>{email}</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               {footer_lisks.map((item, i)  => 
                  <div key={i} className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                  <div className={`tp-footer__widget footer-widget-2 ${item.cls}`}>
                     <h4 className="tp-footer__widget-title">{item.title}</h4>
                     <div className="tp-footer__content">
                        <ul>
                           {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li> ) }                        
                        </ul>
                     </div>
                  </div>
               </div>
               )} 

               <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-4">
                     <h4 className="tp-footer__widget-title">{download}</h4>
                     <div className="tp-footer__download-box d-flex align-items-center">
                        <div className="tp-footer__qrcode mr-15">
                        <Link href="#"> <Image src={qr_code} alt="them-pure"/></Link>
                        </div>
                        <div className="tp-footer__app">
                           <Link href="#"><Image className="mb-15" src={i_phone} alt="them-pure"/></Link>
                        <Link href="#"><Image src={google_ply} alt="them-pure"/></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tp-copyright__area pt-20 pb-20">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__social">
                  
                     {social_links.map((l, i) => (
                           <Link
                           key={i}
                           href={l.link} 
                           target={l.target ? l.target : ""}
                           >
                           <i className={l.icon}></i>
                           </Link>
                        ))} 
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6  d-none d-md-block">
                  <div className="tp-copyright__text tp-copyright__text-2 text-center">
                     <span><CopyRight /></span>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div
                     className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-sm-end justify-content-start">
                     <div className="tp-copyright__lang tp-copyright__lang-2">
                        <ul>
                           <li>
                              <button id="tp-copyright__lang-toggle" onClick={() => oppenLan()} >
                                 <span>English (US)<i className="fal fa-angle-down"></i></span>
                              </button>
                              {isOppen &&
                              <ul className={`tp-copyright__lang-submenu ${isOppen && "open"}`}>
                                 <li>
                                    <Link href="#">Arabic</Link>
                                 </li>
                                 <li>
                                    <Link href="#">Spanish</Link>
                                 </li>
                                 <li>
                                    <Link href="#">Mandarin</Link>
                                 </li>
                              </ul>
                              }
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>

</footer>
        </>
    );
};

export default FooterTwo;