import styled from 'styled-components';

const MainHeading = styled.h1`
  font-size: 3.3.rem;
  font-weight: 900;
`;

const Title = ({ title }) => <MainHeading>{title}</MainHeading>;

export default Title;
