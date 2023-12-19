import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const LogoText = styled(NavLink)`
display: flex;
text-decoration: none;

 p {
    font-weight: 500;
    font-family: inherit;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    color: rgba(18, 20, 23, 1);
    &.active {
    color: #F4C550;
  }

  &:hover {
    color: #F4C550;
  }
      }
 
`;

export const LogoImg = styled.img`
margin-right: 8px;
  width: 100%;
  max-height: 100%;
`;