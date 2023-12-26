import React from 'react';


import img_1 from "../../../../public/assets/img/contact/ny.svg";
import img_2 from "../../../../public/assets/img/contact/kandy.svg";
import img_3 from "../../../../public/assets/img/contact/dubai.svg";
import Image from 'next/image';
import Link from 'next/link';


// office location data
const office_data = [
    {
        id: 1, 
        cls:"",
        img: img_1,
        location: "New York, USA",
        address: <>169 Madison Ave STE 2617<br/>New York, NY 10016</>,
    },
    {
        id: 2, 
        cls:"p-relative",
        img: img_2,
        badge: "Main Office",
        location: "Kandy, Sri Lanka",
        address: <>Katugastota Road<br /> Kandy, 20000</>,
    },
    {
        id: 3, 
        cls:"",
        img: img_3,
        location: "Dubai, UAE",
        address: <>Dubai World Trade Centre<br />About to Open...</>,
    },
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pb-0">
          <div className="container">
            <div className="row">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>Main Office</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="amez-image" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        <Link href="#">{item.location}</Link>
                      </h5>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default OfficeLocation;