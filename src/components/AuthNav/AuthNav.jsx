import React from 'react';
import { AuthBtnLogin } from './AuthNav.styled';
import { AuthBtnRegis } from './AuthNav.styled';
import { AuthContainer } from './AuthNav.styled';
import { LuLogIn } from "react-icons/lu";

const AuthNav = () => {
  return (
    <AuthContainer>
       <AuthBtnLogin to="/" login="true">
       <span><LuLogIn /></span>
        Log in
          </AuthBtnLogin>
      <AuthBtnRegis to="/">Registration</AuthBtnRegis>
    </AuthContainer>
   );
};

export default AuthNav;
