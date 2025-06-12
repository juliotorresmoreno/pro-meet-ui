import { FC, useState } from "react";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputType } from "reactstrap/types/lib/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FormInputProps {
  id: string;
  label: string;
  type?: InputType;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const FormInput: FC<FormInputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
  icon,
  className = "",
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <FormGroup className={className}>
      <Label for={id}>{label}</Label>
      <div className="input-group">
        {icon && <span className="input-group-text">{icon}</span>}
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          {...register}
          className={"form-control " + (error ? "is-invalid" : "")}
        />
        {isPassword && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
        {error?.message && (
          <FormFeedback className="d-flex align-items-center">
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            {error.message}
          </FormFeedback>
        )}
      </div>
    </FormGroup>
  );
};
