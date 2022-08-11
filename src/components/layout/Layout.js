import React from "react";
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Layout = ({child}) => {
    return (
        <div>
            <Header/>
            <main>{child}</main>
            <Footer/>
        </div>
    )
};

export default Layout