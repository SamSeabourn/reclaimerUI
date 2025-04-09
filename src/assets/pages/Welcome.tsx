import { Outlet } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <h1>Reclaimer UI Component Library</h1>
      <p>
        This page is to showcase the reclaimer UI component library that has been mostly based on
        halo game UI Components
      </p>
      <Outlet />
    </div>
  );
}
