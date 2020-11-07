import React from "react";
import Home from "./Home";
import HooksPage from './HooksPage';
import HooksReducer from './HooksReducer';
import HocPage from './HocPage';
import { Provider } from "./context";
import "./App.css";

const Provider22 = React.createContext().Provider;

const store = {
  name: "xiaoming"
};
const store2 = {
  name: "2222"
};

function App() {
  return (
    <div className="App">
      {/* <Provider value={store}>
        <Home />
      </Provider> */}
      {/* <HooksPage /> */}
      {/* <HooksReducer /> */}
      <HocPage />
    </div>
  );
}

export default App;
