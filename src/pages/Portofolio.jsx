import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import PortofolioComp from "../components/Portofolio";

const Portofolio = () => {

    return (
        <section>
            <Nav />
            <div className="layout has-sidebar fixed-sidebar fixed-header">
                <Sidebar />
                <div id="overlay" className="overlay"></div>
                <PortofolioComp />
            </div>
        </section>
    )
}

export default Portofolio
