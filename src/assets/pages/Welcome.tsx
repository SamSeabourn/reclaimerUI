import { Outlet } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <Outlet />
    </div>
  );
}
