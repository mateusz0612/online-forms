import { FC } from "react";
import { ControlledRadio, Radio, Stack } from "libs/ui";
import { FormViewAnswerComponent } from "../../FormView.types";

export const AnswersList: FC<FormViewAnswerComponent> = ({
  questionId,
  answers,
  control,
  isEditable,
  isValueEditDisabled,
}) => {
  return (
    <Stack>
      {answers?.map(({ id, content }) => {
        if (control) {
          return (
            <ControlledRadio
              key={id}
              name={`${questionId}`}
              control={control}
              label={content}
              value={content}
              disabled={isEditable || isValueEditDisabled}
            />
          );
        }

        return <Radio key={id} label={content} checked={false} />;
      })}
    </Stack>
  );
};
