import Homepage from './pages/screen/home';
import Resultpage from './pages/screen/result';
import Contacus from './pages/screen/contactus'
import './styles/result.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resultpage" element={<Resultpage />} />
        <Route path="/Contacus" element={<Contacus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
