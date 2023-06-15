import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoMdPerson, IoMdLogOut } from 'react-icons/io';

function MyProfile() {
    const [decodedToken, setDecodedToken] = useState(() => {
        const user = localStorage.getItem('user');

        if (user) {
            const token = JSON.parse(user);
            return jwt_decode(token);
        }

        return null;
    });

    const navigate = useNavigate();

    const [menuItems, setMenuItems] = useState([
        {
            title: 'menu-title',
            submenu: [
                { title: <IoMdPerson />, path: '/myProfile' },
            ],
            submenuOpen: false,
        },
    ]);

    const handleSignOut = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
    };

    useEffect(() => {
        const user = localStorage.getItem('user');

        if (user) {
            const token = JSON.parse(user);
            const decoded = jwt_decode(token);
            setDecodedToken(decoded);
        } else {
            setDecodedToken(null);
        }
    }, []);

    if (!decodedToken) {
        return null;
    }

    const handleMouseEnter = (index) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].submenuOpen = true;
        setMenuItems(updatedMenuItems);
    };

    const handleMouseLeave = (index) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].submenuOpen = false;
        setMenuItems(updatedMenuItems);
    };


    return (
        <div>
            <ul>
                {menuItems.map((menuItem, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >

                        <img src={`http://localhost:4444/${decodedToken.image}`} style={{width:"20px",height:"20px"}} alt="#"/>

                        {menuItem.submenuOpen && (
                            <ul>
                                {menuItem.submenu.map((subitem, subindex) => (
                                    <li key={subindex}>
                                        <Link to={subitem.path}>{subitem.title}</Link>
                                    </li>
                                ))}
                                <button onClick={handleSignOut}>
                                    <IoMdLogOut />
                                </button>
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyProfile;
