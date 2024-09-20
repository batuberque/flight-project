import { Dialog } from 'primereact/dialog';
import { ReservationWithFlightDetails } from 'services/constants';

interface ReservationDialogProps {
  visible: boolean;
  onHide: () => void;
  reservation?: ReservationWithFlightDetails | null;
}

const ReservationDialog = ({ visible, onHide, reservation }: ReservationDialogProps) => {
  return (
    <Dialog
      header="Flight Details"
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onHide}
      className="p-dialog-custom">
      {reservation && (
        <div>
          <p>
            <strong>
              <i className="pi pi-plane" style={{ marginRight: '8px' }}></i>Flight Name:
            </strong>{' '}
            {reservation.flightDetails.flightName}
          </p>
          <p>
            <strong>
              <i className="pi pi-calendar" style={{ marginRight: '8px' }}></i>Date:
            </strong>{' '}
            {reservation.flightDetails.scheduleDate}
          </p>
          <p>
            <strong>
              <i className="pi pi-info-circle" style={{ marginRight: '8px' }}></i>Gate:
            </strong>{' '}
            {reservation.flightDetails.gate || 'Not Assigned'}
          </p>
          <p>
            <strong>
              <i className="pi pi-clock" style={{ marginRight: '8px' }}></i>Departure Time:
            </strong>{' '}
            {reservation.flightDetails.scheduleTime}
          </p>
        </div>
      )}
    </Dialog>
  );
};

export default ReservationDialog;
