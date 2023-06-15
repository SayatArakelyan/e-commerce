import React, { useState, useEffect } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsStar } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { VscEllipsis } from 'react-icons/vsc';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { FaEnvelope } from 'react-icons/fa';
import {Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useSelector} from "react-redux";
import {selectPosts} from "../../redux/reducers/postSlice";

const SmartPanel = () => {
    const [isHidden, setIsHidden] = useState(JSON.parse(localStorage.getItem('isHidden')) || false);
    const posts = useSelector(selectPosts);
    const count = posts.filter(post => post.isRead === 0).length;

    const [decodedToken] = useState(() => {
        const user = localStorage.getItem('user');

        if (user) {
            const token = JSON.parse(user);
            return jwt_decode(token);
        }

        return null;
    });

    const togglePanelVisibility = () => {
        setIsHidden(!isHidden);
    };

    useEffect(() => {
        localStorage.setItem('isHidden', JSON.stringify(isHidden));
    }, [isHidden]);

    return (
        <>
            {!isHidden && (
                <ul className="header__list">
                    <li>{IoMdNotificationsOutline()}</li>
                    <li>{BsStar()}</li>
                    <li>{CiSettings()}</li>
                    {decodedToken && <li><Link to="/massage">{FaEnvelope()} {count ===0 ? null : count} </Link></li>}
                </ul>
            )}
            <button className="header__button" onClick={togglePanelVisibility}>
                {isHidden ? <IoEllipsisVerticalSharp className="rotate-icon" /> : <VscEllipsis />}
            </button>
        </>
    );
};

export default SmartPanel;
