import { Outlet, NavLink } from 'react-router-dom';

export default function Example2() {
  return (
    <div>
      <h1>Example 2 page</h1>
      <NavLink to="/"> home </NavLink>
      <NavLink to="/Example1"> Page1 </NavLink>
      <NavLink to="/Example2"> Page2 </NavLink>
      <Outlet />
    </div>
  );
}
