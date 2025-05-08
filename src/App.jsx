import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrationform from './pages/Registrationform';
import Loginform from './pages/Loginform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/register" element={<Registrationform />} />
      </Routes>
    </Router>
  );
}

export default App;
