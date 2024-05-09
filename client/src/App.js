import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App" >
      <Header/>
      <Home/>
      <Menu/>
      <About/>
    </div>
  );
}

export default App;
