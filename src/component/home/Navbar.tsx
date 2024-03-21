import  { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import useStore from '../../zustand/changeToggle';


function Navbar() {
    const [isDetailVisible, setIsDetailVisible] = useState(true);
    const { isMenuVisible, toggleMenu } = useStore();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar_helios') as HTMLElement;
            const navbarHeight =navbar.offsetHeight;;
            const scrollPosition = window.scrollY;

            if (scrollPosition > navbarHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleToggleClick = () => {
        toggleMenu();
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDetailVisible(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(isMenuVisible);

    return (
        <div>
            <div className={`navbar_helios ${isFixed ? 'fixed' : ''}`}>
                <div className="navbar_helios-content">
                    <p>GLOBAL SHOP </p>
                    <p>ABOUT US </p>
                    <p>STORE </p>
                </div>
                <div className="navbar_helios-main">
                    <img src="https://heliosjewels.vn/cdn/shop/files/logo_500x.png?v=1652960279" alt="" />
                </div>
                <div className="navbar_helios-icon">
                    <p>Account</p>
                    <p>LOGIN</p>
                    <p>FIND</p>
                </div>
                <div className={`navbar_helios-detail ${isDetailVisible ? 'show' : 'hide'}`}>
                    <p>JEWELRY</p>
                    <p>GIFT</p>
                    <p>COLLECTION</p>
                    <p>ACCESSORIES</p>
                    <p>EYEWEAR</p>
                    <p>JEWELRY</p>
                    <p>SALE OFF</p>
                </div>
                {/* Nút toggle */}
                <nav className="navbar navbar-dark ">
                    <button
                        className={`navbar-toggler ${isMenuVisible ? '' : 'collapsed'}`}
                        type="button" style={{ display: `${isMenuVisible ? "" : "none"}` }}
                        onClick={handleToggleClick}
                    >
                        <span className="navbar-toggler-icon" id="toggleIcon"></span>
                    </button>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleToggleClick} style={{ display: `${isMenuVisible ? "none" : ""}`, color: "white", fontSize: "25px" }}></button>
                </nav>
            </div>
            {isMenuVisible?
            <>
             
            </>:<>
            <div className="navbar-menu_responsive">
                <p>JEWELRY</p>
                <p>GIFT</p>
                <p>COLLECTION</p>
                <p>ACCESSORIES</p>
                <p>EYEWEAR</p>
                <p>JEWELRY</p>
                <p>SALE OFF</p>
            </div>
            </>}
           
        </div>
    );
}

export default Navbar;
