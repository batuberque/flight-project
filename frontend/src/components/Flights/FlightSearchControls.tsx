import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

interface FlightSearchControlsProps {
  date: Date | null;
  direction: string;
  setDate: (date: Date | null) => void;
  setDirection: (direction: string) => void;
  onSearch: () => void;
}

const FlightSearchControls = ({
  date,
  direction,
  setDate,
  setDirection,
  onSearch,
}: FlightSearchControlsProps) => {
  const directions = [
    { label: 'Departure', value: 'D' },
    { label: 'Arrival', value: 'A' },
  ];

  return (
    <div className="p grid p justify-between p align-center">
      <div className="p col-fixed" style={{ width: '250px' }}>
        <Calendar
          id="departure-date"
          value={date}
          onChange={(e) => setDate(e.value ?? null)}
          showIcon
        />
      </div>
      <div className="p col-fixed" style={{ width: '250px' }}>
        <Dropdown
          id="direction-dropdown"
          value={direction}
          options={directions}
          onChange={(e) => setDirection(e.value)}
          placeholder="Select Direction"
        />
      </div>
      <div className="p col-fixed">
        <Button label="Show Flights" onClick={onSearch} className="p button-success" size="small" />
      </div>
    </div>
  );
};

export default FlightSearchControls;
