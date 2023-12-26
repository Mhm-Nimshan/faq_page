import Image from "next/image";
import Link from "next/link";
import React from "react";


import icon_1 from "../../../../public/assets/img/contact/mail.png";
import icon_2 from "../../../../public/assets/img/contact/support.png";
import icon_3 from "../../../../public/assets/img/contact/message.png";


const inner_content = {
  title: "Get In Touch",
  description: <>Currently, we are experiencing a high volume of calls and message requests, which may cause a delay in our response time.<br/>Please be assured that we value your inquiry, and we commit to reaching out to you within 24 hours<br/>upon receiving your request. We appreciate your understanding and patience.</>,

  contact_data: [
    {
      id: 1,
      icon: icon_1,
      title: "info@amezcloud.com",
      link: "mailto:info@amezcloud.com",
    },
    {
      id: 2,
      icon: icon_2,
      title: "support@amezcloud.com",
      link: "mailto:support@amezcloud.com",
    },
    {
      id: 3,
      icon: icon_3,
      title: "+1 (540) 900 0666",
      link: "https://wa.me/15409000666",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pb-80 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <Image src={item.icon} alt="amez-image" style={{width: 30}}/>
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ContactInner;
