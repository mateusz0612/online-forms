import { FC } from "react";
import {
  RadioGroup,
  UncontrolledRadioGroup,
  IRadioOptions,
  Stack,
} from "libs/ui";
import { BooleanAnswersKeys } from "online-forms/types";
import { FormViewAnswerComponent } from "../../FormView.types";

export const BooleanAnswers: FC<FormViewAnswerComponent> = ({
  questionId,
  control,
  isEditable,
  isValueEditDisabled,
}) => {
  const options: IRadioOptions = [
    {
      id: BooleanAnswersKeys.false,
      label: BooleanAnswersKeys.false,
      value: BooleanAnswersKeys.false,
    },
    {
      id: BooleanAnswersKeys.true,
      label: BooleanAnswersKeys.true,
      value: BooleanAnswersKeys.true,
    },
  ];

  return (
    <Stack>
      {control ? (
        <RadioGroup
          name={`${questionId}`}
          control={control}
          options={options}
          disabled={isEditable || isValueEditDisabled}
        />
      ) : (
        <UncontrolledRadioGroup options={options} />
      )}
    </Stack>
  );
};
