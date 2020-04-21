import styled, { css } from 'styled-components';

import colors from '../colors';

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

const Button = styled.button`
  border: none;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
    cursor: progress;
  }

  ${(props: ButtonProps) => props.primary && css`
    background: ${colors.primary};
    color: #fff;
  `}
`;

export default Button;