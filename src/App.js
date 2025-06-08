import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from "./pages/Login";
import GoogleLogin from './pages/GoogleLogin';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/googleLogin" element={<GoogleLogin  />} />
          <Route path="/signup" element={<Signup  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
