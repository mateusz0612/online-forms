import { FC } from "react";
import { IAnswer } from "online-forms/types";
import { ControlledRadio, Radio, Stack, HelperText } from "libs/ui";
import { FormViewAnswerComponent } from "../../FormView.types";

type Props = FormViewAnswerComponent & { answers: IAnswer[] };

export const AnswersList: FC<Props> = ({
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
