import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import './components/styles/markup.css'
import logo from './components/images/topbar_logo.svg'


function App() {

  return (
    <div className='App'>
      <Header logo={logo}/>
      <Content />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
