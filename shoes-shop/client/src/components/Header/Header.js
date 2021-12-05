const { React } = window;
import { Logo } from '../Logo/Logo.js';
import { IconButton } from '../IconButton/IconButton.js';

export const Header = () => {
  return (
    <header className='nav'>
      <nav className='header-container'>
        <Logo />
        <IconButton shape='cart' />
        <IconButton />
      </nav>
    </header>
  );
};
