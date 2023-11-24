import Homepage from './pages/screen/component/home';
import Resultpage from './pages/screen/component/result';
import './pages/screen/styles/result.css';
import './pages/screen/styles/aboutus.css';
import Contacus from './pages/screen/component/contactus';
import Aboutus from './pages/screen/component/About_us';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resultpage" element={<Resultpage />} />
        <Route path="/Contacus" element={<Contacus />} />
        <Route path="/Aboutus" element={<Aboutus />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
