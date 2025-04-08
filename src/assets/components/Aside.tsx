import { NavLink } from 'react-router-dom';

import Button from './Button';

function Aside() {
  const AsideStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black',
  };

  return (
    <aside style={AsideStyle}>
      <h1>Navigation</h1>
      <div>
        <nav>
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>
          <NavLink to="/Example1">
            <Button>Page 1</Button>
          </NavLink>
          <NavLink to="/Example2">
            <Button>Page 2</Button>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Aside;
