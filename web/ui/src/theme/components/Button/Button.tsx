import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #16817a;
  color: #fff;
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
`;

export default Button;