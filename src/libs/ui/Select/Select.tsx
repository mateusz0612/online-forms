import React, { FC, CSSProperties } from "react";
import { Controller, Control } from "react-hook-form";
import {
  Select as MaterialSelect,
  FormControl,
  InputLabel,
  MenuItem,
  MenuItemProps,
} from "@mui/material";

interface Props {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue: string;
  placeholder: string;
  style: CSSProperties;
  renderMenuItems: (
    MenuItem: FC<MenuItemProps>
  ) => React.ReactElement | React.ReactElement[];
}

export const Select: FC<Props> = ({
  name,
  label,
  control,
  defaultValue,
  placeholder,
  style,
  renderMenuItems,
}) => {
  const labelId = `${name}-label`;

  return (
    <FormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <MaterialSelect
            labelId={labelId}
            label={label}
            placeholder={placeholder}
            style={style}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          >
            {renderMenuItems(MenuItem)}
          </MaterialSelect>
        )}
      />
    </FormControl>
  );
};
