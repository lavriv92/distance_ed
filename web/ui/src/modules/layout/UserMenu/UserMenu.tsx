import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

import { AuthContext } from '../../auth';

import { Popover, Icon, Menu } from '../../../theme/components';

import UserIcon from '../../../theme/icons/user.svg';
import IdCardIcon from '../../../theme/icons/id-card-1.svg';
import SettingsIcon from '../../../theme/icons/settings-1.svg';
import ExitIcon from '../../../theme/icons/exit.svg';

const StyledLink = styled(Link)`
  color: #000;
  display: block;

  &:hover {
    text-decoration: none;
    color: #000;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const StyledLinkText = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const StyledName = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserMenu = () => {
  const auth = useContext(AuthContext);

  return (
    <Popover>
      <div>
        <StyledAvatar name="Ivan Lavriv" size="40" round="40px" />
        <StyledName>Ivan Lavriv</StyledName>
      </div>
      <Menu>
        <Menu.Item>
          <StyledLink to="/cabinet/classrooms">
            <Icon icon={UserIcon} />
            <StyledLinkText>Мій кабінет</StyledLinkText>
          </StyledLink>
        </Menu.Item>
        <Menu.Item>
        <StyledLink to="/profile">
          <Icon icon={IdCardIcon} />
          <StyledLinkText>Мій профіль</StyledLinkText>
        </StyledLink>
        </Menu.Item>
        <Menu.Item>
        <StyledLink to="/settings">
          <Icon icon={SettingsIcon} />
          <StyledLinkText>Мої налаштування</StyledLinkText>
        </StyledLink>
        </Menu.Item>
        <Menu.Item>
          <StyledLink to="/auth/sign-in" onClick={auth.signOut}>
            <Icon icon={ExitIcon}/>
            <StyledLinkText>Вийти</StyledLinkText>
          </StyledLink>
        </Menu.Item>
      </Menu>
    </Popover>
  );
};

export default UserMenu;
