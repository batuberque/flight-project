export interface Flight {
  id: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  mainFlight: any;
  route: {
    destinations: string[];
    eu: string;
    visa: boolean;
  };
  scheduleTime: string;
  flightName: string;
  gate?: string;
  terminal?: string;
  scheduleDate: string;
  scheduleDateTime: string;
  publicFlightState: {
    flightStates: string[];
  };
}

export interface Reservation {
  _id: string;
  reservationId: string;
  flightId: string;
}

export interface ReservationWithFlightDetails extends Reservation {
  flightDetails: Flight;
}
