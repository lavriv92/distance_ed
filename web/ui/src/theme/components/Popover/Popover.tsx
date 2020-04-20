import React, { useState } from 'react';
import styled, { css } from 'styled-components';

type HeaderProps = {
  active: boolean
}

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Header = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  ${(props: HeaderProps) => props.active && css`
    background: #fff;
    border-radius: 10px 10px 0 0;
    border-bottom: none;
  `}
`;

const Body = styled.div`
  background: #fff;
  position: absolute;
  padding: 15px;
  width: auto;
  border-radius: 5px;
  display: block;
  min-width: 250px;
  right: 0;
  border-radius: 10px 0 10px 10px;
`;

const Popover: React.FC<any> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const [ heading, body ] = children;

  const toggle = () => setVisible(!visible);

  return <PopoverWrapper>
    <Header active={visible} onClick={toggle}>{heading}</Header> 
    {visible && <Body>{body}</Body>}
  </PopoverWrapper>
};

export default Popover;