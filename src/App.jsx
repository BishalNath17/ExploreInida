import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AllStates from './pages/AllStates';
import StateDetail from './pages/StateDetail';
import HiddenGems from './pages/HiddenGems';
import BudgetPlanner from './pages/BudgetPlanner';
import Safety from './pages/Safety';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/states" element={<AllStates />} />
          <Route path="/states/:code" element={<StateDetail />} />
          <Route path="/hidden-gems" element={<HiddenGems />} />
          <Route path="/budget-planner" element={<BudgetPlanner />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
