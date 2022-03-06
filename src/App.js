// import logo from './ball.png';
import './App.scss';
import './styles/bg.scss';
import './styles/page.scss';

import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import Home from './pages/Home';
import Basketball from './pages/Basketball';
import Football from './pages/Football';
import Handball from './pages/Handball';
import About from './pages/About';
import Blank from './pages/Blank';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="bg-image"></div>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact={true} element={<Home />}/>
            <Route path="/basketball" exact={true} element={<Basketball />}/>
            <Route path="/football" exact={true} element={<Football />}/>
            <Route path="/handball" exact={true} element={<Handball />}/>
            <Route path="/about" exact={true} element={<About />}/>
            <Route path="/404" exact={true} element={<Blank />}/>
          </Routes>
          {/* <Routes >
              <Route path="/"><Home /></Route>
          </Routes > */}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
