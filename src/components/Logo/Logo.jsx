import React from 'react';
import { LogoText } from './Logo.styled';
import { LogoImg } from './Logo.styled';
import lingoLogo from 'assets/ukraine.png'

const Logo = ({ size }) => {
  return (
    <LogoText to="/">
            <LogoImg src={lingoLogo} alt="logo" width="28" height="28" />
      <p>LearnLingo</p>
    </LogoText>
  );
};

export default Logo;
