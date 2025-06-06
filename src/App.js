import React, { useState } from 'react'
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from "./pages/Login";
import GoogleLogin from './pages/GoogleLogin';
import Signup from './pages/Signup';

function App() {
  const [auth, setAuth] = useState(false);
  // const location = useLocation();
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Login setAuth={setAuth} />} />
          <Route path="/googleLogin" element={<GoogleLogin setAuth={setAuth}  />} />
          <Route path="/signup" element={<Signup setAuth={setAuth}  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
