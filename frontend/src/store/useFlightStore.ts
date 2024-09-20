import { Flight } from 'services/constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface FlightState {
  date: Date | null;
  direction: string;
  selectedFlight: Flight | null;
  setDate: (date: Date | null) => void;
  setDirection: (direction: string) => void;
  setSelectedFlight: (flight: Flight | null) => void;
}

export const useFlightStore = create<FlightState>()(
  immer((set) => ({
    date: null,
    direction: '',
    selectedFlight: null,
    setDate: (date: Date | null) =>
      set((state) => {
        state.date = date;
      }),
    setDirection: (direction: string) =>
      set((state) => {
        state.direction = direction;
      }),
    setSelectedFlight: (flight: Flight | null) =>
      set((state) => {
        state.selectedFlight = flight;
      }),
  }))
);
