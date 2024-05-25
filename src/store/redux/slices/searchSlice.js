import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SearchService from "../services/searchService";

//createAsyncthunk takes 2args, name and arrow func
export const getData = createAsyncThunk("searchData", async ({ url }) => {
  try {
    const data = await SearchService.fetchData(`${url}`);
    return { ...data };
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  searchData: [],
};

const searchSlice = createSlice({
  name: "searching",
  initialState,
  reducers: {},
});

export default searchSlice.reducer;
