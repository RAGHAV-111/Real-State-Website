import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <Box>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
