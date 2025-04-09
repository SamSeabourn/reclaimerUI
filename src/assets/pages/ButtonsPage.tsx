import { Outlet } from 'react-router-dom';

import Button from '../components/Button';

export default function ButtonsPage() {
  return (
    <div>
      <h1>Buttons1</h1>
      <p>
        This button is designed to emulate the classic halo buttons seen in games as far back as
        halo 2
      </p>
      <div>
        <Button>Example 1</Button>
        <Button>Example 2</Button>
        <Button>Example 3</Button>
      </div>
      <h2>code sample</h2>
      <Outlet />
    </div>
  );
}
