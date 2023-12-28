import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import fa from "@fullcalendar/core/locales/fa"; // a plugin!

const Calendar = () => {
  return (
    <FullCalendar
      locale={fa}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
    />
  );
};

export default Calendar;
