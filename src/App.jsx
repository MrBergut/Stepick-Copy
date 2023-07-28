import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Catalog from "./containers/pages/Catalog";
import Teaching from "./containers/pages/Teaching";

import store from "./redux/store";

import "./App.css";
import logo from "./assets/images/topbar_logo.svg";

import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header logo={logo} />
      </Provider>
      <Routes className="routes">
        <Route path="/" element={<Content />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
      <Footer logo={logo} />
    </div>
  );
}

export default App;
