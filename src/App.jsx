import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Programs from './pages/Programs/Programs';
import Schools from './pages/Schools/Schools';
import Competitions from './pages/Competitions/Competitions';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
