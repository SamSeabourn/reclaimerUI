import { Outlet } from 'react-router-dom';

export default function Example1() {
  return (
    <div>
      <h1>Example page 1</h1>
      <p> Example paragraph </p>
      <Outlet />
    </div>
  );
}
