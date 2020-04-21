import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Menu, Icon } from '../../../theme/components';

import UsersIcon from '../../../theme/icons/users.svg';
import NoteIcon from '../../../theme/icons/note.svg';
import CalendarIcon from '../../../theme/icons/calendar.svg';
import ResumeIcon from '../../../theme/icons/resume.svg';

const StyledLink = styled(Link)`
  color: #000;
  line-height: 30px;
  display: block;

  &:hover {
    color: #000;
  }
`;

const StyledLinkText = styled.span`
  display: inline-block;
  margin-left: 15px;
  font-weight: 400;
`;

const TeacherMenu: React.FC<{}> = () => {
  return (
    <>
    <Menu>
      <Menu.Item>
      <StyledLink to="/cabinet/classrooms">
        <Icon large icon={UsersIcon} />
        <StyledLinkText>Класи</StyledLinkText>
      </StyledLink>
      </Menu.Item>
      <Menu.Item>
        <StyledLink to="/cabinet/materials">
          <Icon large icon={NoteIcon} />
          <StyledLinkText>Матеріали</StyledLinkText>
        </StyledLink>
      </Menu.Item>
      <Menu.Item>
        <StyledLink to="/cabinet/materials">
          <Icon large icon={ResumeIcon} />
          <StyledLinkText>Тести</StyledLinkText>
        </StyledLink>
      </Menu.Item>
      <Menu.Item>
      <StyledLink to="/cabinet/schedule">
        <Icon large icon={CalendarIcon} />
        <StyledLinkText>Розклад</StyledLinkText>
      </StyledLink>
      </Menu.Item>
    </Menu>
    </>
  );
};

export default TeacherMenu;
