import { FC } from "react";
import { ControlledRadio, Radio, Stack } from "libs/ui";
import { FormViewAnswerComponent } from "../../FormView.types";

export const BooleanAnswers: FC<FormViewAnswerComponent> = ({
  questionId,
  control,
}) => {
  return (
    <Stack>
      {control ? (
        <>
          <ControlledRadio
            name={questionId}
            control={control}
            label="Yes"
            value="yes"
          />
          <ControlledRadio
            name={questionId}
            control={control}
            label="No"
            value="no"
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
