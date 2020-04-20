import React from 'react';
import styled, { css } from 'styled-components';

type StyledIconProps = {
  large?: boolean;
};

type IconProps = {
  icon: string,
};

const StyledIcon = styled.img`
  width: 20px;
  margin-bottom: -7px;

  ${(props: StyledIconProps) => props.large && css`
    width: 40px;
  `}
`;

const Icon: React.FC<IconProps> = ({ icon, ...restProps }) => <StyledIcon src={icon} {...restProps} />;

export default Icon;