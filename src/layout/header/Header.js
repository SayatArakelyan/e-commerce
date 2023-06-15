import React from 'react';
import HeaderSearch from "./HeaderSearch";
import logo from "../../assets/img/logo.png"
import SmartPanel from "./SmartPanel";
import SignIn from "./SignIn";
import Register from "./Register";
import SwitchLanguage from "./SwitchLanguage";
import {useState,useEffect} from "react";
import jwt_decode from "jwt-decode";
import MyProfile from "./MyProfile";


const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userData, setUserData] = useState(null);






    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <img className="header__logo" src={logo} alt="logo"/>
                        <HeaderSearch/>

                    </div>

                    <div className="header__center">
                        <SmartPanel/>
                    </div>

                    <div className="header__right">
                        <SignIn isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}
                                onClickOutside={() => {
                                    setIsModalVisible(false)
                                }} userData={userData} setUserData={setUserData}/>
                        <Register userData={userData} setUserData={setUserData}/>
                        <MyProfile />

                        <SwitchLanguage/>

                    </div>


                </nav>


            </div>

        </header>
    );
};

export default Header;