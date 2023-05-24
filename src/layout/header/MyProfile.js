// import React, { useEffect } from 'react';
// import jwt_decode from 'jsonwebtoken';
//
// function MyProfile({ userData, setUserData }) {
//     useEffect(() => {
//         const storedToken = localStorage.getItem('user');
//         if (storedToken) {
//             const decodedToken = jwt_decode(storedToken);
//             setUserData(decodedToken);
//         }
//     }, []);
//
//     console.log('My profile', userData);
//
//     return <div>{userData && userData.user && userData.user.FirstName}</div>;
// }
//
// export default MyProfile;
