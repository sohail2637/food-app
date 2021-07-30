import logo from "./logo.svg";
import "./App.css";
import Main from "./compoent/Main";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

// "start": "node server/server.js & react-scripts start,"

export default App;
