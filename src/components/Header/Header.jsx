


import { HeaderStyles, Logo } from './Header.styled';

import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  

  return (
    <HeaderStyles>
     
        <Logo to="/">
          Logo
        </Logo>
      
        <Navigation/>
    </HeaderStyles>
  );
};

export default Header;
