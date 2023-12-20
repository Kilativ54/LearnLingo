import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  width: 255px;
  height: 48px;
`;

export const AuthBtnLogin = styled.button`
  display: flex;
    justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 2px solid var(--header-items-color);
  background-color: inherit;
  text-decoration: none;
margin-right: 16px;
height: 48px;
  color:rgba(18, 20, 23, 1);
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.64px;
  transition: all var(--duration) var(--cubic);

  &:active {
    color: #F4C550;
  }

  &:hover {
    color: #F4C550;
  }
`;

export const AuthBtnRegis = styled.button`
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
  transition: all var(--duration) var(--cubic);
  &:hover {
    background-color: : #F4C550;
  };
  &:active {
    background-color: #F4C550;
    border-color: inherit;;
    };

  &:hover {
    background-color: : #F4C550;
  };
  
  
`;
