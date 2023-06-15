import React from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function PersonalInfo() {
    const [decodedToken, setDecodedToken] = useState({});

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

    const accountStatus = decodedToken.isVerify  === 0 ? 'Not Verified' : 'Verified';


    return (
        <div className="personal-info-container">
            <h1>Personal Information</h1>
            <div className="info-item">
                <label>Email:</label>
                <span>{decodedToken.Email}</span>
            </div>
            <div className="info-item">
                <label>First Name:</label>
                <span>{decodedToken.FirstName}</span>
            </div>
            <div className="info-item">
                <label>Last Name:</label>
                <span>{decodedToken.LastName}</span>
            </div>
            <div className="info-item">
                <label>Country:</label>
                <span>{decodedToken.country}</span>
            </div>
            <div className="info-item">
                <label>Phone Number:</label>
                <span>{decodedToken.phoneNumber}</span>
            </div>
            <div className="info-item">
                <label>Role:</label>
                <span>{decodedToken.role}</span>
            </div>
            <div className="info-item">
                <label>Account Status:</label>
                <span>{accountStatus}</span>
            </div>
        </div>
    );
}

export default PersonalInfo;
