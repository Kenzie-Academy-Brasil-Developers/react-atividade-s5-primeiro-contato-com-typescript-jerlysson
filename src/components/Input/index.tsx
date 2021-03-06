import { InputHTMLAttributes } from "react";
import { InputStyle } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <InputStyle>
      {label && <label>{label}</label>}
      <input {...rest} />
    </InputStyle>
  );
};
