import { Routes, Route } from 'react-router-dom';

import Welcome from './assets/pages/Welcome';
import Aside from './assets/components/Aside.tsx';
import Example2 from './assets/pages/Example2.tsx';
import './assets/css/global.css';
import ButtonsPage from './assets/pages/ButtonsPage.tsx';

function App() {
  return (
    <>
      <div className="app-container">
        <Aside />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/ButtonsPage" element={<ButtonsPage />} />
            <Route path="/Example2" element={<Example2 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
