import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrationform from './pages/Registrationform';
import Loginform from './pages/Loginform';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/register" element={<Registrationform />} />
      </Routes>
    </Router>
  );
}

export default App;
