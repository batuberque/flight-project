import { useRef, useCallback } from 'react';
import { format } from 'date-fns';
import { useFetchFlights } from 'hooks/useFlights';

import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { useFlightStore } from 'store/useFlightStore';
import { useCreateReservation } from 'hooks/useReservation';
import { useDialogVisibilityStore } from 'store/useDialogVisibilityStore';
import FlightSearchControls from './Flights/FlightSearchControls';
import FlightList from './Flights/FlightList';

const Flights = () => {
  const toast = useRef<Toast>(null);
  const { date, direction, setDate, setDirection, selectedFlight, setSelectedFlight } =
    useFlightStore();
  const {
    data: flights,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchFlights(date ? format(date, 'yyyy-MM-dd') : '', direction);
  const { mutate: createReservation } = useCreateReservation();
  const { setVisible } = useDialogVisibilityStore();

  const handleSearch = useCallback(() => {
    if (date && direction) {
      refetch();
    }
  }, [date, direction, refetch]);

  const handleBookFlight = useCallback(
    (flight: any) => {
      setSelectedFlight(flight);
      confirmDialog({
        message: `Do you want to book the flight ${flight.flightName}?`,
        header: 'Flight Booking Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          createReservation(
            { flightId: flight.id },
            {
              onSuccess: () => {
                toast.current?.show({
                  severity: 'success',
                  summary: 'Confirmed',
                  detail: 'Flight booked successfully!',
                  life: 3000,
                });
                setVisible(false);
              },
              onError: (error) => {
                toast.current?.show({
                  severity: 'error',
                  summary: 'Error',
                  detail: error?.message || 'Flight booking failed. Please try again.',
                  life: 3000,
                });
                setVisible(false);
              },
            }
          );
        },
        reject: () => {
          toast.current?.show({
            severity: 'warn',
            summary: 'Rejected',
            detail: 'Flight booking was canceled.',
            life: 3000,
          });
          setVisible(false);
        },
      });
    },
    [createReservation, setSelectedFlight, setVisible]
  );
  return (
    <div className="p p-4">
      <Toast ref={toast} />
      <FlightSearchControls
        date={date}
        direction={direction}
        setDate={setDate}
        setDirection={setDirection}
        onSearch={handleSearch}
      />
      {isLoading && <p>Please choose a date and direction</p>}
      {isError && <p>{error.message}</p>}
      <FlightList flights={flights} onBookFlight={handleBookFlight} />
      <ConfirmDialog />
    </div>
  );
};

export default Flights;
