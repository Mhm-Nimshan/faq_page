import useSticky from '@/src/hooks/use-sticky';
import Offcanvus from '@/src/common/offcanvus';
import Link from 'next/link';
import SearchPopup from '@/src/modals/search-popup';
import React,{useState} from 'react';
import NavMenu from './nav-menu';
import UserIcon from '@/src/svg/user-icon';
import SearchIconTwo from '@/src/svg/search-icon-2';
import Image from 'next/image';


import logo from "../../../public/assets/img/logo/logo-black.svg"

const HeaderThree = () => {

    const {sticky} = useSticky()
    const [searchOpen, setSearchOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
        <header className="tp-header-height">
            <div id="header-sticky" className={`"header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="header-bottom__logo">
                           <Link href="/"><Image src={logo} alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                        <div className="header-bottom__main-menu header-bottom__main-menu-3">
                           <nav id="mobile-menu">
                              <NavMenu /> 
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-6">
                        <div className="header-bottom__right d-flex align-items-center justify-content-end">
                           <div className="header-bottom__action">
                           <a className=" d-md-inline-block search-open-btn"
                                    onClick={() => setSearchOpen(true)} > 
                                    <SearchIconTwo />
                                 </a>
                                 <Link className="d-none d-md-inline-block last-child" href="/register">
                                    <UserIcon /> 
                                    <span>Log In</span>
                                 </Link>
                           </div>
                           <div className="header-bottom__btn d-flex align-items-center">
                              <Link className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block" href="#">
                                 <span className="white-text">Dashboard</span> 
                                 <b></b>
                              </Link>
                              <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={()  => setSidebarOpen(true)}><i className="fal fa-bars"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
         <Offcanvus sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />

            
        </>
    );
};

export default HeaderThree;