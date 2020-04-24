import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Menu, Icon } from '../../../theme/components';

import UsersIcon from '../../../theme/icons/users.svg';
import NoteIcon from '../../../theme/icons/note.svg';
import CalendarIcon from '../../../theme/icons/calendar.svg';
import ResumeIcon from '../../../theme/icons/resume.svg';

import colors from '../../../theme/colors';

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
  font-weight: 600;
  color: #666;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMenu = styled(Menu)`
  background: #fff;
`;

const StyledMenuItem = styled(Menu.Item)`
  border-right: 4px solid transparent;
  margin-bottom: 5px;

  &:hover {
    background: #f6f6f6;
    border-radius: 0;
    border-right: 4px solid ${colors.primary};
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const TeacherMenu: React.FC<{}> = () => {
  return (
    <>
      <StyledMenu>
        <StyledMenuItem>
          <StyledLink to="/cabinet/classrooms">
            <Icon large icon={UsersIcon} />
            <StyledLinkText>Класи</StyledLinkText>
          </StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/cabinet/materials">
            <Icon large icon={NoteIcon} />
            <StyledLinkText>Матеріали</StyledLinkText>
          </StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/cabinet/materials">
            <Icon large icon={ResumeIcon} />
            <StyledLinkText>Тести</StyledLinkText>
          </StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
        <StyledLink to="/cabinet/schedule">
          <Icon large icon={CalendarIcon} />
          <StyledLinkText>Розклад</StyledLinkText>
        </StyledLink>
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};

export default TeacherMenu;
