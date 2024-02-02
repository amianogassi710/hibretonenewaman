import React, { useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [openClass, setOpenClass] = useState('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
    return (
        <>
            <div className="body-overlay-1" onClick={handleRemove} />
            <Header handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass} />
            <Sidebar openClass={openClass} />
            <main className="main">
                <div className="background-style-container">
                    <img src="assets/imgs/page/layout/bg-1.png" className="background-shape-1" />
                    <img src="assets/imgs/page/layout/bg-2.png" className="background-shape-2" />
                </div>
                {children}
            </main>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Layout;
