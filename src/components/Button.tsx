import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  className?: string;
  color?: string;
  bgColor?: string;
  focusColor?: string;
  children?: React.ReactElement | string;
  light?: boolean;
  onClick?: () => void;
}

const Button = (
  { className, color = '#fff', bgColor = '#5c7cfa', focusColor = '#4263eb',
    children, light = false, onClick }: IButtonProps) => {
  const StyledButton = styled.button`
    color: ${color};
    background-color: ${bgColor};
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.4rem 1.2rem;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${focusColor};
    }

    ${light && `
      color: ${bgColor};
      background-color: transparent;
      border: 2px solid ${bgColor};

      &:hover,
      &:focus {
        color: ${focusColor};
        background-color: transparent;
        border: 2px solid ${focusColor};
      }
    `}
  `;

  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

export const LargeButton = styled(Button)`
  width: 100%;
  padding: 0.7rem 0 !important;
`;
