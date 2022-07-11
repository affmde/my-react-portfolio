import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/about';
import { Homepage } from './components/homepage';
import { TopNav } from './components/navbar';
import { Projects } from './components/projects';
import { Footer } from './components/footer';
import { Skills } from './components/skills';
import 'animate.css'
import { Contacts } from './components/contacts';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav></TopNav>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
