import { DataScroller } from 'primereact/datascroller';
import { Fieldset } from 'primereact/fieldset';
import FlightItem from './FlightItem';
import { Flight } from 'services/constants';

interface FlightListProps {
  flights: Flight[] | undefined;
  onBookFlight: (flight: Flight) => void;
}

const FlightList = ({ flights, onBookFlight }: FlightListProps) => (
  <Fieldset legend="Available Flights" toggleable className="p mt-4">
    {flights && flights.length > 0 ? (
      <DataScroller
        value={flights}
        itemTemplate={(flight) => <FlightItem flight={flight} onBook={onBookFlight} />}
        rows={5}
        inline
        buffer={0.4}
      />
    ) : (
      <p>No flights available.</p>
    )}
  </Fieldset>
);

export default FlightList;
