import React from 'react';
import styled, { css } from 'styled-components';

type StyledIconProps = {
  large?: boolean;
};

type IconProps = {
  icon: string,
  large?: boolean
};

const StyledIcon = styled.img`
  width: 20px;
  margin-bottom: -7px;

  ${(props: StyledIconProps) => props.large && css`
    width: 30px;
  `}
`;

const Icon: React.FC<IconProps> = ({ icon, large, ...restProps }) => <StyledIcon src={icon} large={large} {...restProps} />;

export default Icon;