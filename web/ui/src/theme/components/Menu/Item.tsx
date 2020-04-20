import styled from 'styled-components';

const Item = styled.li`
  margin: 0;
  padding: 10px 15px;
  margin-bottom: 15px;
  list-style: none;
  display: block;

  &:hover {
    background: #f6f6f6;
    border-radius: 10px;
  }
`;

export default Item;