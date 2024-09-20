import { ReservationWithFlightDetails } from 'services/constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ReservationState {
  selectedReservation: ReservationWithFlightDetails | null;
  setSelectedReservation: (reservation: ReservationWithFlightDetails | null) => void;
}

export const useReservationStore = create<ReservationState>()(
  immer((set) => ({
    selectedReservation: null,
    setSelectedReservation: (reservation: ReservationWithFlightDetails | null) =>
      set((state) => {
        state.selectedReservation = reservation;
      }),
  }))
);
