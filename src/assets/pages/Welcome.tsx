import { Outlet, NavLink } from 'react-router-dom';

//import Button from './assets/components/Button.tsx';

export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <NavLink to="/"> home </NavLink>
      <NavLink to="/Example1"> Page1 </NavLink>
      <NavLink to="/Example2"> Page2 </NavLink>
      <Outlet />
    </div>
  );
}
