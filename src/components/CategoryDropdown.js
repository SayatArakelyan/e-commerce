// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {useEffect} from "react";
// import {fetchCategories} from "../redux/reducers/categorySlice";
//
//
// const CategoryDropdown = () => {
//     const categories = useSelector((state) => state.category.categories);
//     const dispatch = useDispatch()
//
//     useEffect(()=>{
//         dispatch(fetchCategories())
//
//     },[dispatch])
//
//     console.log(categories)
//
//
//     return (
//         <div>
//             <label>Category:</label>
//             <select>
//                 <option value="">All Categories</option>
//                 {categories.map((category) => (
//                     <option key={category.id} value={category.id}>
//                         {category.titleEn}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };
//
// export default CategoryDropdown;
