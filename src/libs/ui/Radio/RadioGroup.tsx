import { FC } from "react";
import { FormControlLabel, Radio as MaterialRadio } from "@mui/material";
import {
  Controller,
  Control,
  FieldValues,
  useController,
} from "react-hook-form";

export interface IRadioOption {
  label: string;
  value: string;
  id: string;
}

export type IRadioOptions = IRadioOption[];

interface Props {
  options: IRadioOptions;
  name: string;
  control: Control<FieldValues>;
  disabled?: boolean;
  multiple?: boolean;
}

export const UncontrolledRadioGroup: FC<
  Pick<Props, "options" | "disabled">
> = ({ options, disabled }) => {
  return (
    <>
      {options?.map(({ id, label }) => {
        return (
          <FormControlLabel
            key={id}
            label={label}
            disabled={disabled}
            control={
              <MaterialRadio
                value={label}
                checked={false}
                disabled={disabled}
              />
            }
          />
        );
      })}
    </>
  );
};

export const RadioGroup: FC<Props> = ({
  name,
  options,
  control,
  disabled,
  multiple,
}) => {
  const {
    field: { onChange, onBlur, ref, value: currentValue },
  } = useController({
    name,
    control,
    defaultValue: multiple ? [] : "",
  });

  const onRadioChange = (value: unknown) => {
    if (!multiple) {
      onChange(value);
      return;
    }

    if (currentValue?.includes(value)) {
      onChange(currentValue?.filter((curr: unknown) => curr !== value));
      return;
    }

    onChange([...currentValue, value]);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <>
          {options?.map(({ id, label, value }) => {
            const checked = multiple
              ? currentValue?.includes(value)
              : currentValue === value;

            return (
              <FormControlLabel
                key={id}
                label={label}
                disabled={disabled}
                control={
                  <MaterialRadio
                    value={label}
                    checked={checked}
                    disabled={disabled}
                    onClick={() => onRadioChange(value)}
                    onBlur={onBlur}
                    ref={ref}
                  />
                }
              />
            );
          })}
        </>
      )}
    />
  );
};
