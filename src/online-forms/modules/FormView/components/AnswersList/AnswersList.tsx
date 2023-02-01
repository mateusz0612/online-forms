import { FC } from "react";
import { RadioGroup, UncontrolledRadioGroup, Stack } from "libs/ui";
import { FormViewAnswerComponent } from "../../FormView.types";

export const AnswersList: FC<FormViewAnswerComponent> = ({
  questionId,
  answers,
  control,
  multiple,
  isEditable,
  isValueEditDisabled,
}) => {
  const options =
    answers?.map(({ id, content }) => ({
      id,
      label: content,
      value: content,
    })) || [];

  return (
    <Stack>
      {control ? (
        <RadioGroup
          name={`${questionId}`}
          control={control}
          options={options}
          disabled={isEditable || isValueEditDisabled}
          multiple={multiple}
        />
      ) : (
        <UncontrolledRadioGroup options={options} />
      )}
    </Stack>
  );
};
