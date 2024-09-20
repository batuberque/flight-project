import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ReservationWithFlightDetails } from 'services/constants';
import { Tag } from 'primereact/tag';
import { Divider } from 'primereact/divider';

interface ReservationCardProps {
  reservation: ReservationWithFlightDetails;
  onViewDetails: (reservation: ReservationWithFlightDetails) => void;
  onDelete: (reservationId: string) => void;
}

const ReservationCard = ({ reservation, onViewDetails, onDelete }: ReservationCardProps) => {
  const { flightDetails } = reservation;
  const { flightName, gate, scheduleDate, scheduleTime, route, publicFlightState } = flightDetails;

  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '10px',
        marginTop: '1.5rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h5 style={{ margin: '0', marginLeft: '14px', fontWeight: 'bold' }}>
            <i className="pi pi-plane" style={{ marginRight: '10px', color: '#3f51b5' }}></i>
            Flight: {flightName}
          </h5>
          <p style={{ margin: '5px 0', color: '#888' }}>
            <i className="pi pi-calendar" style={{ marginRight: '8px' }}></i>
            {scheduleDate}
          </p>
          <p style={{ margin: '5px 0', color: '#888' }}>
            <i className="pi pi-clock" style={{ marginRight: '8px' }}></i>
            Departure: {scheduleTime}
          </p>
          <p style={{ margin: '5px 0', color: '#888' }}>
            <i className="pi pi-map-marker" style={{ marginRight: '8px' }}></i>
            Route: {route.destinations.join(' → ')}
          </p>
          <p style={{ margin: '5px 0', color: '#888' }}>
            <i className="pi pi-info-circle" style={{ marginRight: '8px' }}></i>
            Flight State: {publicFlightState.flightStates.join(', ')}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <Tag value={`Gate: ${gate || 'Not Assigned'}`} severity={gate ? 'success' : 'warning'} />
        </div>
      </div>

      <Divider />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          label="View Details"
          icon="pi pi-eye"
          className="p-button-outlined p-button-secondary"
          onClick={() => onViewDetails(reservation)}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={() => onDelete(reservation._id)}
        />
      </div>
    </Card>
  );
};

export default ReservationCard;
