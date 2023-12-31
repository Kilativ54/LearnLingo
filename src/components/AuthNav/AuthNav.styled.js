import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  width: 255px;
  height: 48px;
`;

export const AuthBtnLogin = styled(Link)`
  display: flex;
    justify-content: center;
  align-items: center;
 width: 90px;
 height: 20px;
  background-color: inherit;
  text-decoration: none;
  align-items: center;
padding-right: 16px;

height: 48px;
  color:rgba(18, 20, 23, 1);
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.64px;
  transition: color 500ms ease-in-out;
span{
  color: #F4C550;
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
  &:active {
    color: #F4C550;
  }

  &:hover {
    color: #F4C550;
  }
`;

export const AuthBtnRegis = styled(Link)`
  display: flex;
    
  justify-content: center;
  align-items: center;
   border-radius: 12px;
    background-color: rgba(18, 20, 23, 1);
  text-decoration: none;
gap: 8px;
width: 166px;
height: 48px;
  color: rgba(255, 255, 255, 1);
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: background-color 500ms ease-in-out;
  &:hover {
    background-color: #F4C550;
    border-color: inherit;
  };
  &:active {
    background-color: #F4C550;
    border-color: inherit;
    };

  
  
`;
