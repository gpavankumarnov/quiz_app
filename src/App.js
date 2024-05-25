import logo from "./logo.svg";
import "./App.css";
import Timer from "./pages/Timer/Timer";
import SearchFunc from "./pages/searchFunc/SearchFunc";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {

const handleClick = () => {
  console.log("add")
}

  return (
    <Provider store={store}>
      <div>
        <h1>APP Test</h1>
        {/* <SearchFunc /> */}
        <button onClick={handleClick}>ADD</button>
      </div>
    </Provider>
  );
}

export default App;
