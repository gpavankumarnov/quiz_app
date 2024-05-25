import axios from "axios";


//we are calling this func in slice.js
const fetchData = (url) => {
  try {
   const {data} = axios.get(`${url}`);
   return data;
  } catch (err) {
    return console.log(err);
  }
};


const SearchService = {
    fetchData
};

export default SearchService