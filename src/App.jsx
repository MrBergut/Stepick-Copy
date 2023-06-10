import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";

import "./styles/markup.css";
import logo from "./assets/images/topbar_logo.svg";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Content />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
