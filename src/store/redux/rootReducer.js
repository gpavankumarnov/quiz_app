import { combineReducers } from "redux";
import searchSlice from '../redux/slices/searchSlice'


const rootReducer = combineReducers({
    search: searchSlice 
})


export default rootReducer