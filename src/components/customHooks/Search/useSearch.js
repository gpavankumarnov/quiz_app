// import React, { useEffect, useState } from "react";
// // import axios from 'axios'
// const useSearch = (searchFieldVal) => {
//   const [data, setData] = useState([]);

//   var transformedProducts;

//   useEffect(() => {
//     if (searchFieldVal === "") {
//       fetchAPIData();
//     } else {
        
//       setData(data.filter((e) => e.name.includes(searchFieldVal)));
      
//     }
//   }, [searchFieldVal]);

//   const fetchAPIData = async () => {
//     const { data } = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setData(data);
//   };

//   console.log("api data is", data, );
 

//   return data;
// };

// export default useSearch;
