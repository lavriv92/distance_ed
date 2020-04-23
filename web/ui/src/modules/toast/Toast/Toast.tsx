import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

import colors from '../../../theme/colors';
import { strings } from '../../../utils';

import { IToast } from '../models';
import { ToastType } from '../enums';


const toastAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transfom: translateX(0);
  }
`;

type StyledToastProps = {
  type: ToastType
};

const StyledToast = styled.div`
  margin-bottom: 10px;
  width: 300px;
  border-radius: 8px;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  transition: transform .6s ease-in;
  animation: ${toastAnimation} .3s linear;
  cursor: pointer;

  ${(props: StyledToastProps) => props.type === ToastType.SUCCESS && css`
    background: ${colors.success};
    color: ${darken(0.4, colors.success)};
  `}

  ${(props: StyledToastProps) => props.type === ToastType.INFO && css`
    background: ${colors.info};
    color: ${darken(0.4, colors.info)};
  `}

  ${(props: StyledToastProps) => props.type === ToastType.WARNING && css`
    background: ${colors.warning};
    color: ${darken(0.4, colors.warning)};
  `}

  ${(props: StyledToastProps) => props.type === ToastType.DANGER && css`
    background: ${colors.danger};
    color: ${darken(0.4, colors.danger)};
  `}
`;

const Heading = styled.h3`
  margin: 0; 
  padding: 0; 
  margin-bottom: 10px;
`

const Toast: React.FC<IToast> = ({ id, type, message, onRemove, ...restProps }) => (
  <StyledToast type={type} onClick={() => onRemove(id)} {...restProps}>
    <div>
      <Heading>{strings.capitalize(type)}</Heading>
      <div>{message}</div>
    </div>
  </StyledToast>
);

export default Toast;