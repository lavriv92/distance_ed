import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../auth';
import { Navbar } from '../../../theme/components';

import UserMenu from '../UserMenu';
import Chat from '../Chat';
import Notifications from '../Notifications';

const Brand = styled(Link)`
  color: #f79071;
  text-decoration: none;
  font-size: 45px;
  font-weight: 300;

  &:hover {
    text-decoration: none;
    color: #f79071;
  }
`;

const Second = styled.strong`
  color: #16817a;
  font-weight: 900;
`;

const SignInLink = styled(Link)`
  display: inline-block;
  margin: 0 10px;
`;

const Header: React.FC<any> = () => {
  const auth = useContext(AuthContext);

  return (
    <Navbar>
      <Brand to="/">
        Distance<Second>ED</Second>
      </Brand>
      {auth.isAuthenticated ? (
        <div>
          <Notifications />
          <Chat />
          <UserMenu />
        </div>
      ) : (
        <div>
          <SignInLink to="/auth/sign-in">
            Увійти
          </SignInLink>
          <SignInLink to="/auth/sign-up">
            Зареєструватись
          </SignInLink>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
