import { Reservation } from 'services/constants';
import axiosInstance from '../axios/axios';

export const createReservation = async (reservationData: { flightId: string }): Promise<void> => {
  console.log('createReservation called with:', reservationData);
  try {
    await axiosInstance.post('/reservations', reservationData);
    console.log('createReservation successful');
  } catch (error) {
    console.error('createReservation failed with:', error);
    throw error;
  }
};

export const fetchReservations = async (): Promise<Reservation[]> => {
  console.log('fetchReservations called');
  try {
    const { data } = await axiosInstance.get<Reservation[]>('/reservations');
    console.log('fetchReservations successful, data:', data);
    return data;
  } catch (error) {
    console.error('fetchReservations failed with:', error);
    throw error;
  }
};

export const deleteReservation = async (reservationId: string): Promise<void> => {
  console.log('deleteReservation called with:', reservationId);
  try {
    await axiosInstance.delete(`/reservations/${reservationId}`);
    console.log('deleteReservation successful');
  } catch (error) {
    console.error('deleteReservation failed with:', error);
    throw error;
  }
};
