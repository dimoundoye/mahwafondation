import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/layout/SmoothScroll';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import Actions from './pages/Actions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <SmoothScroll>
              <SiteLayout />
            </SmoothScroll>
          }
        >
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="actions" element={<Actions />} />
          <Route path="galerie" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
