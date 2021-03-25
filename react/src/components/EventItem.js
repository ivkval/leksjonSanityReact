import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EventContainer = styled.article`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  padding: 2rem 3rem;
`;

const EventHeading = styled.h2`
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.default};
`;

const EventPreAmble = styled(EventHeading)`
  font-size: 1.3rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.default};
`;

const EventItem = ({ heading, preAmble, slug }) => (
  <EventContainer>
    <EventHeading>{heading}</EventHeading>
    <EventPreAmble>{preAmble}</EventPreAmble>
    <StyledLink to={`/events/${slug}`}>Gå til event</StyledLink>
  </EventContainer>
);

export default EventItem;
