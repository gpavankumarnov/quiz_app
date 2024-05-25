import React, { useEffect, useState } from "react";
import useSearch from "../../components/customHooks/Search/useSearch.js";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/redux/slices/searchSlice.js";

const SearchFunc = () => {
  // const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();
  // const data = useSearch(searchVal);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(
        getData("https://jsonplaceholder.typicode.com/posts")
      );
      console.log("api req data is", data)
    };
    fetchData();
  
  }, []);

  const data = useSelector((state) => state.searchData);
  console.log("data is", data);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => console.log(e.target.value)}
      />
      {data && data.map((e) => <li>{e.name}</li>)}
    </div>
  );
};

export default SearchFunc;
