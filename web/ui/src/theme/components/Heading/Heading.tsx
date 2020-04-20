import styled, { css } from 'styled-components';

type HeadingProps = {
  centered?: boolean
};

const Heading = styled.h2`
  margin-bottom: 15px;
  color: #16817a;
  font-weight: 300;
  ${(props: HeadingProps) => props.centered && css`
    text-align: center;
  `}
`;

export default Heading;

