// components/MeetingStatsCard.tsx
import { Card, CardBody } from "reactstrap";

interface MeetingStatsCardProps {
  readonly title: string;
  readonly value: string;
  readonly change: string;
  readonly icon: React.ReactNode;
}

export default function MeetingStatsCard({
  title,
  value,
  change,
  icon,
}: MeetingStatsCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <Card className="shadow-sm border-0">
      <CardBody>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6 className="text-muted mb-2">{title}</h6>
            <h3 className="mb-0">{value}</h3>
          </div>
          <div className="icon-container bg-light rounded-circle p-3">
            {icon}
          </div>
        </div>
        <p
          className={`mb-0 mt-2 ${isPositive ? "text-success" : "text-danger"}`}
        >
          <i
            className={`bi ${
              isPositive ? "bi-arrow-up" : "bi-arrow-down"
            } me-1`}
          ></i>
          {change}
        </p>
      </CardBody>
    </Card>
  );
}
