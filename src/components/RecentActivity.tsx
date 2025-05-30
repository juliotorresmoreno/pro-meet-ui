// components/RecentActivity.tsx
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import {
  FaCalendarAlt,
  FaVideo,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "meeting",
      title: "Project Review",
      time: "2 hours ago",
      status: "completed",
      participants: 3,
    },
    {
      id: 2,
      type: "event",
      title: "Team Weekly Sync",
      time: "Yesterday",
      status: "completed",
      participants: 8,
    },
    {
      id: 3,
      type: "reminder",
      title: "Client Follow-up",
      time: "1 day ago",
      status: "pending",
    },
    {
      id: 4,
      type: "meeting",
      title: "Product Demo",
      time: "2 days ago",
      status: "completed",
      participants: 5,
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return <FaVideo className="text-primary me-2" />;
      case "event":
        return <FaCalendarAlt className="text-info me-2" />;
      case "reminder":
        return <FaCheckCircle className="text-warning me-2" />;
      default:
        return <FaCalendarAlt className="text-secondary me-2" />;
    }
  };

  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-white border-0 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Recent Activity</h5>
        <small className="text-muted">Last 7 days</small>
      </CardHeader>
      <CardBody className="p-0">
        <ListGroup flush>
          {activities.map((activity) => (
            <ListGroupItem key={activity.id} className="border-0 px-4 py-3">
              <div className="d-flex align-items-center">
                <div className="me-3">{getActivityIcon(activity.type)}</div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">{activity.title}</h6>
                  <div className="d-flex align-items-center">
                    <small className="text-muted me-2">{activity.time}</small>
                    {activity.participants && (
                      <small className="d-flex align-items-center me-2">
                        <FaUserFriends className="me-1" />
                        {activity.participants}
                      </small>
                    )}
                    <Badge
                      color={
                        activity.status === "completed" ? "success" : "warning"
                      }
                      pill
                      className="text-capitalize"
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
        <div className="text-center py-3 border-top">
          <button className="btn btn-sm btn-link">View All Activity</button>
        </div>
      </CardBody>
    </Card>
  );
}
