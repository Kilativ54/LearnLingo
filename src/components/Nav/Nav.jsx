import React from 'react';
import { StyledLink } from './Nav.styled';

const Nav = () => {
  return (
    <>
      <StyledLink to="/news">Home</StyledLink>

      <StyledLink to="/notices">Teachers</StyledLink>

      <StyledLink to="/news">Favorites</StyledLink>

    </>
  );
};

export default Nav;
