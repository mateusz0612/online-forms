import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { TextField as MaterialTextField, TextFieldProps } from "@mui/material";

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  type?: string;
  inputMode?:
    | "text"
    | "none"
    | "search"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
  rows?: number;
  multiline?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  disableErrorMessage?: boolean;
  control: Control<any>;
}

export const TextField: FC<Props> = ({
  name,
  placeholder,
  type,
  label,
  inputMode,
  rows,
  multiline,
  disabled,
  disableErrorMessage,
  defaultValue,
  control,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { ref, onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <MaterialTextField
          placeholder={placeholder}
          type={type}
          label={label}
          value={value}
          inputMode={inputMode}
          rows={rows}
          disabled={disabled}
          multiline={multiline}
          error={!!error}
          helperText={!disableErrorMessage && error?.message}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export const UncontrolledTextField: FC<TextFieldProps> = (props) => (
  <MaterialTextField {...props} />
);
