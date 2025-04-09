import { Routes, Route } from 'react-router-dom';

import Welcome from './assets/pages/Welcome';
import Example1 from './assets/pages/Example1';
import Aside from './assets/components/Aside.tsx';
import Example2 from './assets/pages/Example2.tsx';
import './assets/css/global.css';

function App() {
  return (
    <>
      <div className="app-container">
        <Aside />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Example1" element={<Example1 />} />
            <Route path="/Example2" element={<Example2 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
