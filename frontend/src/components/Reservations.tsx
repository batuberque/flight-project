import { useCallback, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useFetchReservationsWithDetails, useDeleteReservation } from 'hooks/useReservation';
import { useDialogVisibilityStore } from 'store/useDialogVisibilityStore';
import { useReservationStore } from 'store/useReservationStore';
import Loader from './Reservation/Loader';
import ReservationDialog from './Reservation/ReservationDialog';
import ReservationCard from './Reservation/ReservationCard';

const Reservations = () => {
  const toast = useRef<Toast>(null);
  const {
    data: reservationsWithDetails,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchReservationsWithDetails();
  const { mutate: deleteReservation } = useDeleteReservation();
  const { isVisible, setVisible } = useDialogVisibilityStore();
  const { selectedReservation, setSelectedReservation } = useReservationStore();

  const showDetails = (reservation: any) => {
    setSelectedReservation(reservation);
    setVisible(true);
  };

  const hideDetails = () => {
    setVisible(false);
    setSelectedReservation(null);
  };

  const handleDelete = useCallback(
    (reservationId: any) => {
      deleteReservation(reservationId, {
        onSuccess: () => {
          toast.current?.show({
            severity: 'success',
            summary: 'Reservation Deleted',
            detail: 'The reservation was successfully deleted.',
            life: 3000,
          });
          refetch();
        },
        onError: (error) => {
          toast.current?.show({
            severity: 'error',
            summary: 'Delete Failed',
            detail: error?.message || 'Failed to delete the reservation.',
            life: 3000,
          });
        },
      });
    },
    [deleteReservation, refetch]
  );

  return (
    <div className="grid">
      <Toast ref={toast} />
      <Loader isLoading={isLoading} isError={isError} error={error} />
      <ReservationDialog
        visible={isVisible}
        onHide={hideDetails}
        reservation={selectedReservation}
      />
      {reservationsWithDetails?.map((reservation, index) => (
        <ReservationCard
          key={index}
          reservation={reservation}
          onViewDetails={showDetails}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Reservations;
