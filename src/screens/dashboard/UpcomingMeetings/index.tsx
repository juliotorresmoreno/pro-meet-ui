// components/UpcomingMeetings.tsx
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import Link from 'next/link';

export default function UpcomingMeetings() {
  const meetings = [
    {
      id: 1,
      title: 'Project Kickoff',
      date: 'Today, 2:00 PM',
      participants: 5,
      duration: '30m',
      type: 'video'
    },
    {
      id: 2,
      title: 'Client Review',
      date: 'Tomorrow, 10:00 AM',
      participants: 3,
      duration: '1h',
      type: 'in-person'
    },
    {
      id: 3,
      title: 'Team Sync',
      date: 'Fri, 11:00 AM',
      participants: 8,
      duration: '45m',
      type: 'video'
    }
  ];

  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-white border-0">
        <h5 className="mb-0">Upcoming Meetings</h5>
      </CardHeader>
      <CardBody className="p-0">
        <ListGroup flush>
          {meetings.map(meeting => (
            <ListGroupItem key={meeting.id} className="border-0 px-4 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">{meeting.title}</h6>
                  <small className="text-muted">
                    <i className="bi bi-clock me-1"></i>
                    {meeting.date} • {meeting.duration} • {meeting.participants} people
                  </small>
                </div>
                <div>
                  <span className={`badge bg-${meeting.type === 'video' ? 'info' : 'primary'}-subtle text-${meeting.type === 'video' ? 'info' : 'primary'} me-2`}>
                    {meeting.type === 'video' ? 'Video Call' : 'In Person'}
                  </span>
                  <Link href={`/meeting/${meeting.id}`} className="btn btn-sm btn-outline-secondary">
                    Details
                  </Link>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
}