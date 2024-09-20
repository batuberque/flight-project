import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createReservation,
  deleteReservation,
  fetchReservations,
} from 'services/queries/reservationsApi';
import { fetchFlightDetails } from 'services/queries/flightsApi';
import { Reservation, ReservationWithFlightDetails } from 'services/constants';

export const useCreateReservation = () =>
  useMutation<void, Error, { flightId: string }>({
    mutationFn: (reservationData) => {
      console.log('useCreateReservation called with:', reservationData);
      return createReservation(reservationData)
        .then((data) => {
          console.log('useCreateReservation successful, data:', data);
          return data;
        })
        .catch((error) => {
          console.error('useCreateReservation failed with:', error);
          throw error;
        });
    },
  });

export const useFetchReservations = () =>
  useQuery<Reservation[], Error>({
    queryKey: ['reservations'],
    queryFn: () => {
      console.log('useFetchReservations called');
      return fetchReservations()
        .then((data) => {
          console.log('useFetchReservations successful, data:', data);
          return data;
        })
        .catch((error) => {
          console.error('useFetchReservations failed with:', error);
          throw error;
        });
    },
  });

export const useFetchReservationsWithDetails = () => {
  return useQuery<ReservationWithFlightDetails[], Error>({
    queryKey: ['reservationsWithDetails'],
    queryFn: async () => {
      const reservations = await fetchReservations();
      const detailedReservations = await Promise.all(
        reservations.map(async (reservation) => {
          const flightDetails = await fetchFlightDetails(reservation.flightId);
          return { ...reservation, flightDetails };
        })
      );
      return detailedReservations;
    },
  });
};

export const useDeleteReservation = () =>
  useMutation<void, Error, string>({
    mutationFn: (reservationId) => {
      console.log('useDeleteReservation called with:', reservationId);
      return deleteReservation(reservationId)
        .then(() => {
          console.log('useDeleteReservation successful');
        })
        .catch((error) => {
          console.error('useDeleteReservation failed with:', error);
          throw error;
        });
    },
  });
