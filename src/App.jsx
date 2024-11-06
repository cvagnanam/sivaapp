import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import NotFound from './NotFound';
import Hookks from './Hookks';
import CallBack from './CallBack';
import ContextOne from './ContextOne';
import Search from './Search';

import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <ul>
          <li><Link to="/Hookks">Hookks</Link></li>
          <li><Link to="/CallBack">CallBack</Link></li>
          <li><Link to="/ContextOne">Context</Link></li>
          <li><Link to="/Search">Search</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hookks" element={<Hookks />} />
          <Route path="/CallBack" element={<CallBack />} />
          <Route path="/ContextOne" element={<ContextOne />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Catch-all route for 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
