import styled from 'styled-components';
import colors from '../../colors';

const Item = styled.li`
  margin: 0;
  padding: 10px 15px;
  margin-bottom: 15px;
  list-style: none;
  display: block;

  &:hover {
    background: ${colors.secondary};
    border-radius: 10px;
  }
`;

export default Item;