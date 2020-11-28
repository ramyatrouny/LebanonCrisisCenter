import { useEffect, useState } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import Map from './components/Map'
import filterEvents from './utils/FilterEvents';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      const filteredEvents = await filterEvents(events);

      setEventData(filteredEvents);
      setLoading(false);
    }

    fetchEvents();
  }, [])

  return (
    <div>
      <Header />
      {
        loading ?
          <Loader />
          :
          <Map eventData={eventData} />
      }
    </div>
  );
}

export default App;
