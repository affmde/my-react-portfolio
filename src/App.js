import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/about';
import { Homepage } from './components/homepage';
import { TopNav } from './components/navbar';
import { Projects } from './components/projects';
import { Footer } from './components/footer';
import { Skills } from './components/skills';
import 'animate.css'
import { Contacts } from './components/contacts';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div>
      <HashRouter>
        <Helmet>
          <title>Portfolio</title>
          <meta 
            name="description"
            content="My personal portfolio where you can know more about me and se all my work"
          />
          <meta 
            name="keywords"
            content="Portfolio, web-development, Projects, Andre Miranda, affmde, job, seeker"
          />
          
        </Helmet>
        <TopNav></TopNav>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
