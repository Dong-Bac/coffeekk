
import Header from './components/header/Header';
import Home from './components/action/home/Home';
import Menu from './components/action/menu/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/menu/coffee' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
