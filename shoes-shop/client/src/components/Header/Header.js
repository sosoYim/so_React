const { React } = window;
import { Logo } from '../Logo/Logo.js';
import { IconButton } from '../IconButton/IconButton.js';

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-container'>
        <Logo />
        <IconButton shape='cart' />
        <IconButton />
      </nav>
    </header>
  );
};
