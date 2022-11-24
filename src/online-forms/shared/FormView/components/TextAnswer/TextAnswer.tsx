import { FC } from "react";
import { Stack, TextField } from "libs/ui";
import { FormViewAnswerComponent } from "../../FormView.types";

export const TextAnswer: FC<FormViewAnswerComponent> = ({
  questionId,
  isEditable,
  register,
}) => {
  return (
    <Stack mt={1}>
      {register ? (
        <TextField
          label="User answer"
          disabled={isEditable}
          {...register(questionId as never)}
        />
      ) : (
        <TextField label="User answer" disabled={isEditable} />
      )}
    </Stack>
  );
};
