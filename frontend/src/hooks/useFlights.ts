import { useQuery } from '@tanstack/react-query';
import { fetchFlightDetails, fetchFlights } from 'services/queries/flightsApi';
import { Flight } from '../services/constants';

export const useFetchFlights = (date: string, direction: string) =>
  useQuery<Flight[], Error>({
    queryKey: ['flights', date, direction],
    queryFn: () => fetchFlights(date, direction),
  });

export const useFetchFlightDetails = (flightId: string) => {
  return useQuery({
    queryKey: ['flight', flightId],
    queryFn: () => fetchFlightDetails(flightId),
    enabled: !!flightId,
  });
};
