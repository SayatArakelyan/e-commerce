import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet} from "react-router-dom";

import NestedMenu from "./Navigation/Nav";


const Layout = () => {
    return (
        <div>

            <Header/>

            <Outlet/>
            <NestedMenu/>

            <Footer/>

        </div>
    );
};

export default Layout;