import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { Switch as MaterialSwitch, SwitchProps } from "@mui/material";

interface Props {
  name: string;
  defaultValue?: boolean;
  control: Control<any>;
}

export const Switch: FC<Props> = ({ control, name, defaultValue }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, onBlur, value } }) => (
        <MaterialSwitch
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          checked={value}
        />
      )}
    />
  );
};
