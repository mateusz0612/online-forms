import { FC } from "react";
import {
  FormControlLabel,
  Radio as MaterialRadio,
  RadioProps,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface Props {
  control: Control;
  value: string;
  name: string;
  label: string;
}

export const ControlledRadio: FC<Props> = ({ control, value, name, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value: currentValue } }) => (
        <FormControlLabel
          label={label}
          control={
            <MaterialRadio
              checked={currentValue === value}
              onChange={onChange}
              onBlur={onBlur}
            />
          }
        />
      )}
    />
  );
};

export const Radio: FC<RadioProps & { label: string }> = ({
  label,
  ...props
}) => <FormControlLabel control={<MaterialRadio {...props} />} label={label} />;
