import { useState } from 'react';
// import EventItem from '../components/EventItem';
// import Grid from '../components/Grid';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getEvents } from '../utils/eventService';

/* const events = [
  {
    heading: 'Halden Rebus',
    preAmble: 'Dette er ingressen',
    slug: 'event-one',
  },
  {
    heading: 'Sarpsborg Festival',
    preAmble: 'Dette er ingressen',
    slug: 'event-two',
  },
]; */

const Events = () => {
  const [data, setData] = useState([]);

  const handleClick = async () => {
    const allEvents = await getEvents();
    setData(allEvents);
  };

  return (
    <Container>
      <Title title="Events" />
      {/* <Grid columns="repeat(3, 1fr)">
        {events?.length > 0
          ? events.map((event) => <EventItem key={event.slug} {...event} />)
          : null}
        </Grid> */}
      {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
      <button type="button" onClick={handleClick}>
        Get content
      </button>
    </Container>
  );
};

export default Events;
