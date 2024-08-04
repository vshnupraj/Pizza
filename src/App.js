
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
          
            <Route index element={<Home />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
