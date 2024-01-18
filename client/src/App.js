import Homepage from './component/pages/home';
import Resultpage from './component/pages/result';
import './component/styles/result.css';
import './component/styles/aboutus.css';
import Contactus from './component/pages/Contact_us'
import Aboutus from './component/pages/About_us';
import Datafill from './component/pages/datafill'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resultpage" element={<Resultpage />} />
        <Route path="/" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/datafill" element={<Datafill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
