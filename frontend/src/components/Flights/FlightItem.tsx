import { Button } from 'primereact/button';
import { Flight } from 'services/constants';

interface FlightItemProps {
  flight: Flight;
  onBook: (flight: Flight) => void;
}

const FlightItem = ({ flight, onBook }: FlightItemProps) => (
  <div
    className="p flex p align-items-center p justify-between p mb-2 p p-3"
    style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '1rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
    <div style={{ flex: 1 }}>
      <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.25rem' }}>
        <i className="pi pi-plane" style={{ marginRight: '10px', color: '#3f51b5' }}></i>
        {`${flight.flightName} - ${flight.route.destinations.join(' → ')}`}
      </h5>
      <p style={{ margin: '5px 0', color: '#888' }}>
        <i className="pi pi-clock" style={{ marginRight: '8px' }}></i>
        {`${flight.scheduleTime} - ${flight.scheduleDate}`}
      </p>
      <p style={{ margin: '5px 0', color: '#888' }}>
        <i className="pi pi-map-marker" style={{ marginRight: '8px' }}></i>
        Gate: {flight.gate || 'Not Assigned'}
      </p>
    </div>
    <div style={{ flex: '0 0 auto', textAlign: 'right' }}>
      <Button
        label="Book Flight"
        icon="pi pi-check"
        className="p button-outlined p button-success"
        onClick={() => onBook(flight)}
        style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
      />
    </div>
  </div>
);

export default FlightItem;
