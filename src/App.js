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

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav></TopNav>
        <Routes>
          <Route path="/my-react-portfolio" element={<Homepage />}></Route>
          <Route path="/my-react-portfolio/about" element={<About />}></Route>
          <Route path="/my-react-portfolio/skills" element={<Skills />}></Route>
          <Route path="/my-react-portfolio/projects" element={<Projects />}></Route>
          <Route path="/my-react-portfolio/contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
