import React from 'react';
import { AuthBtnLogin } from './AuthNav.styled';
import { AuthBtnRegis } from './AuthNav.styled';
import { AuthContainer } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthContainer>
       <AuthBtnLogin to="/" login="true">
        Log IN
          </AuthBtnLogin>
      <AuthBtnRegis to="/">Registration</AuthBtnRegis>
    </AuthContainer>
   );
};

export default AuthNav;
