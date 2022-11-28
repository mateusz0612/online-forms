import { FC } from "react";
import { ControlledRadio, Radio, Stack } from "libs/ui";
import { BooleanAnswersKeys } from "online-forms/types";
import { FormViewAnswerComponent } from "../../FormView.types";

export const BooleanAnswers: FC<FormViewAnswerComponent> = ({
  questionId,
  control,
  isEditable,
  isValueEditDisabled,
}) => {
  return (
    <Stack>
      {control ? (
        <>
          <ControlledRadio
            name={`${questionId}`}
            control={control}
            value={BooleanAnswersKeys.true}
            disabled={isEditable || isValueEditDisabled}
            label="Yes"
          />
          <ControlledRadio
            name={`${questionId}`}
            control={control}
            value={BooleanAnswersKeys.false}
            disabled={isEditable || isValueEditDisabled}
            label="No"
          />
        </>
      ) : (
        <>
          <Radio label="Yes" checked={false} />
          <Radio label="No" checked={false} />
        </>
      )}
    </Stack>
  );
};
