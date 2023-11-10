import { HeaderContainer } from './styles';
import Logo from './../../assets/Logo.svg';
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />

      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
