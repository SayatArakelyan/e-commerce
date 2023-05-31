// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {useEffect} from "react";
// import {fetchLevels} from "../redux/reducers/levelSlice";
//
// const LevelDropdown = () => {
//     const levels = useSelector((state)=>state.levels.levels);
//     const dispatch = useDispatch()
//
//     useEffect(()=>{
//         dispatch(fetchLevels())
//
//     },[dispatch])
//
//     console.log(levels)
//
//
//     return (
//         <div>
//             <label>Specialist Level:</label>
//             <select>
//                 <option value="">All Levels</option>
//                 {levels.map((level) => (
//                     <option key={level.id} value={level.id}>
//                         {level.titleEn}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };
//
// export default LevelDropdown;
