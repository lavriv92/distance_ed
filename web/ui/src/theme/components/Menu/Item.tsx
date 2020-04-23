import styled from 'styled-components';
import colors from '../../colors';

const Item = styled.li`
  margin: 0;
  padding: 10px 15px;
  margin-bottom: 15px;
  list-style: none;
  display: block;
  transition: background .2s;
  border-radius: 10px;

  &:hover {
    background: ${colors.secondary};
  }
`;

export default Item;