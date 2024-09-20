import { Flight } from 'services/constants';
import axiosInstance from 'services/axios/axios';

export const fetchFlights = async (date: string, direction: string): Promise<Flight[]> => {
  if (!date || !direction) {
    throw new Error('Date and direction must be provided');
  }

  const { data } = await axiosInstance.get<Flight[]>(
    `/flights?date=${date}&direction=${direction}`
  );
  return data;
};

export const fetchFlightDetails = async (flightId: string): Promise<Flight> => {
  if (!flightId) {
    throw new Error('Flight ID must be provided');
  }

  const { data } = await axiosInstance.get<Flight>(`/flights/${flightId}`);
  return data;
};
