import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}
function Button({ children }: ButtonProps) {
  const ButtonStyle = {
    fontSize: 'medium',
  };
  return (
    <button style={ButtonStyle} className="ButtonLink">
      {children}
    </button>
  );
}
export default Button;
