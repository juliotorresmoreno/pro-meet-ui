import { CSSProperties, PropsWithChildren } from "react";
import { FaSave } from "react-icons/fa";
import { Button } from "reactstrap";

const style: CSSProperties = {
  minWidth: "100px",
};

const SaveButton: React.FC<
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
      color="primary"
      {...props}
    >
      <FaSave className="me-1" />
      {children || "Save"}
    </Button>
  );
};

export default SaveButton;
