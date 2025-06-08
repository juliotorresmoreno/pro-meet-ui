// components/CalendarView.tsx
import { useState } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { format, addMonths, subMonths } from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import * as parseDate from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse: parseDate,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState([
    {
      title: "Client Meeting",
      start: new Date(2023, 5, 12, 10, 0),
      end: new Date(2023, 5, 12, 11, 0),
      desc: "Quarterly review",
    },
    {
      title: "Team Sync",
      start: new Date(2023, 5, 14, 14, 0),
      end: new Date(2023, 5, 14, 15, 0),
      desc: "Weekly update",
    },
  ]);

  return (
    <Card className="shadow-sm border-0">
      <CardHeader className="bg-white border-0 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Calendar</h5>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <span className="mx-2 fw-bold">
            {format(currentDate, "MMMM yyyy")}
          </span>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </CardHeader>
      <CardBody>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultView="month"
          views={["month", "week", "day", "agenda"]}
          onSelectEvent={(event) => alert(event.desc)}
        />
      </CardBody>
    </Card>
  );
}
