import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenus from '../layout/headers/mobile-menus';
 
// images import 
import logo from "../../public/assets/img/logo/logo-white.svg"

const Offcanvus = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <>
            <div className="tpoffcanvas-area">
                <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
                    <div className="tpoffcanvas__close-btn">
                    <button className="close-btn" onClick={() => setSidebarOpen(false)}><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                    <Link href="/" onClick={() => setSidebarOpen(false)}>
                        <Image src={logo} alt="amez-image" />
                    </Link>
                    </div>
                    <div className="mobile-menu mean-container">
                        <MobileMenus />
                    </div>


                    <div className="tpoffcanvas__social">
                    <div className="social-icon text-center">
                        <Link href="https://www.facebook.com/amezcloud"><i className="fab fa-facebook"></i></Link>
                        <Link href="https://www.instagram.com/amezcloud/"><i className="fab fa-instagram"></i></Link>
                        <Link href="https://www.linkedin.com/company/amezcloud/"><i className="fab fa-linkedin"></i></Link>
                        <Link href="https://whatsapp.com/channel/0029VaChvG2JUM2SPbC3642C"><i className="fab fa-whatsapp"></i></Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen &&  "apply"}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    );
};

export default Offcanvus;