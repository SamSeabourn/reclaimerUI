import { ReactNode } from 'react';

import './Button.css';

interface ButtonProps {
  children: ReactNode;
}
function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>;
}
export default Button;
