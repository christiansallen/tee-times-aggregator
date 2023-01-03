import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

type Props = {
  // Add any props for the component here
};

const Calendar: React.FC<Props> = (props) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return <DatePicker selected={selectedDate} onChange={handleDateChange} />;
};

export default Calendar;
