import { FC } from "react";
import { Stack, TextField } from "libs/ui";
import { FormViewAnswerComponent } from "../../FormView.types";

export const TextAnswer: FC<FormViewAnswerComponent> = ({
  questionId,
  isEditable,
  isValueEditDisabled,
  register,
}) => {
  return (
    <Stack mt={1}>
      {register ? (
        <TextField
          disabled={isEditable || isValueEditDisabled}
          {...register(questionId as never)}
        />
      ) : (
        <TextField disabled={isEditable || isValueEditDisabled} />
      )}
    </Stack>
  );
};
