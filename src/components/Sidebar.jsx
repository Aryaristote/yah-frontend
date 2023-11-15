import { SlGraph } from 'react-icons/sl';
import { CiWallet } from 'react-icons/ci';
import React, { useEffect, useState } from 'react';
import { AiOutlineContacts } from "react-icons/ai";  
import { PiMoneyThin } from "react-icons/pi";  
import { useLocation, useNavigate } from 'react-router-dom';


const Sidebar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [newActiveTab, setNewactiveTab] = useState(1); 

    const handleTabClick = (tabNumber) => {
        const value = tabNumber;
        setNewactiveTab(tabNumber);
        props.onValueChange(value);
    };

    const logout = () => {
        document.cookie = 'User=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        navigate('/login');
    }

    return(
        <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
            <div className="image-wrapper">
                <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
            </div>
            <div className="sidebar-layout">
                <div className="sidebar-content">
                    <nav className="menu open-current-submenu">
                        <ul>
                            <li className="menu-header"><span> CUSTOMERS </span></li>
                            
                            <li className="menu-item">
                                <a href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}> 
                                    <span className="menu-icon">
                                        <SlGraph />
                                    </span>
                                    <span className={pathname === '/dashboard' ? 'actv' : 'menu-title'}>Investors</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="/portofolio" className={pathname === '/portofolio' ? 'active' : ''} >
                                    <span className="menu-icon">
                                        <CiWallet />
                                    </span>
                                    <span className={pathname === '/portofolio' ? 'actv' : 'menu-title'}>Portofolios</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="/projects" className={pathname === '/projects' ? 'active' : ''} >
                                    <span className="menu-icon">
                                        <PiMoneyThin className="sidebar-icn" />
                                    </span>
                                    <span className={pathname === '/projects' ? 'actv' : 'menu-title'}>Projects</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="/contact" className={pathname === '/contact' ? 'active' : ''} >
                                    <span className="menu-icon">
                                        <AiOutlineContacts />
                                    </span>
                                    <span className={pathname === '/contact' ? 'actv' : 'menu-title'}>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="logout-">
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;