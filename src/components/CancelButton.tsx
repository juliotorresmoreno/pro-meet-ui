import { CSSProperties, PropsWithChildren } from "react";
import { FaTimes } from "react-icons/fa";
import { Button } from "reactstrap";

const style: CSSProperties = {
  minWidth: "100px",
};

const CancelButton: React.FC<
  React.ComponentPropsWithoutRef<"button"> & PropsWithChildren
> = ({ children, ...props }) => {
  const className = [
    "justify-content-end",
    props.className ? ` ${props.className}` : "",
  ]
    .join(" ")
    .trim();

  return (
    <Button
      className={className}
      style={{ ...style, ...props.style }}
      color="secondary"
      {...props}
    >
      <FaTimes className="me-1" />
      {children || "Cancel"}
    </Button>
  );
};

export default CancelButton;
