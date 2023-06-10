import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './components/styles/markup.css'
import logo from './assets/images/topbar_logo.svg'



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
