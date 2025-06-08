import { CSSProperties, PropsWithChildren } from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "reactstrap";

const style: CSSProperties = {
  minWidth: "100px",
};

const DeleteButton: React.FC<
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
      color="danger"
      {...props}
    >
      <FaTrash className="me-1" />
      {children || "Delete"}
    </Button>
  );
};

export default DeleteButton;
