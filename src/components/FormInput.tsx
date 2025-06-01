import { FC } from "react";
import { Input, FormGroup, Label, FormFeedback } from "reactstrap";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputProps, InputType } from "reactstrap/types/lib/Input";

interface FormInputProps extends React.HTMLAttributes<InputProps> {
  label: string;
  type?: InputType;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
  icon?: React.ReactNode;
}

export const FormInput: FC<FormInputProps> = ({
  id,
  label,
  type,
  register,
  error,
  icon,
}) => (
  <FormGroup className="mb-3">
    <Label for={id}>{label}</Label>
    <div className="input-group">
      {icon && <span className="input-group-text">{icon}</span>}
      <Input id={id} type={type} invalid={!!error} {...register} />
      {error && <FormFeedback>{error.message}</FormFeedback>}
    </div>
  </FormGroup>
);
