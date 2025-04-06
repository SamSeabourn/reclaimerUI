import { Routes, Route } from 'react-router-dom';

import Welcome from './assets/pages/Welcome';
import Example1 from './assets/pages/Example1';
import Example2 from './assets/pages/Example2.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Example1" element={<Example1 />} />
      <Route path="/Example2" element={<Example2 />} />
    </Routes>
  );
}
export default App;
