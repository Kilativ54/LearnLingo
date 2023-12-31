import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  background-color: rgba(244, 197, 80, 1);
  color: rgba(18, 20, 23, 1);
  transition: background-color 500ms ease-in-out;
  border-radius: 12px;
  border: none;

  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  width: 267px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #eeac05;
  }
`;
