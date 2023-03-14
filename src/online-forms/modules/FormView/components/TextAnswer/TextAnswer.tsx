import { FC } from "react";
import { Stack, TextField, UncontrolledTextField } from "libs/ui";
import { FormViewAnswerComponent } from "../../FormView.types";

export const TextAnswer: FC<FormViewAnswerComponent> = ({
  questionId,
  isEditable,
  isValueEditDisabled,
  control,
}) => {
  return (
    <Stack mt={1}>
      {control ? (
        <TextField
          name={`${questionId}`}
          disabled={isEditable || isValueEditDisabled}
          placeholder="Enter answer..."
          control={control}
          disableErrorMessage
        />
      ) : (
        <UncontrolledTextField disabled={isEditable || isValueEditDisabled} />
      )}
    </Stack>
  );
};
