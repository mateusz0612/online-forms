import { FC } from "react";
import {
  FormControlLabel,
  Radio as MaterialRadio,
  RadioProps,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface Props {
  control: Control<any>;
  value: string | boolean;
  name: string;
  label: string;
  disabled?: boolean;
}

export const ControlledRadio: FC<Props> = ({
  control,
  value,
  name,
  label,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, ref, value: currentValue } }) => (
        <FormControlLabel
          label={label}
          disabled={disabled}
          control={
            <>
              <MaterialRadio
                value={value}
                checked={currentValue === value}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
              />
            </>
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
