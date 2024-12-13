import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileList from './pages/ProfileList';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProfileList />} />
    </Routes>
  </Router>
);

export default App;
