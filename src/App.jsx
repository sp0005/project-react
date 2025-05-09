import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrationform from './pages/Registrationform';
import Loginform from './pages/Loginform';
import ForgotPassword from './pages/Forgotpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/register" element={<Registrationform />} />
        <Route path="/forgot-password" element={<ForgotPassword/> } /> 
      </Routes>
    </Router>
  );
}

export default App;
