import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";

import store from "./redux/store";

import "./styles/markup.css";
import logo from "./assets/images/topbar_logo.svg";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header logo={logo} />
      </Provider>
      <Content />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
