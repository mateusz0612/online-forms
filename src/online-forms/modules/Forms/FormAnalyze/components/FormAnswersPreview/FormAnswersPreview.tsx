import { forwardRef } from "react";
import { Stack } from "libs/ui";
import { IControl, IRegister } from "libs/development-kit/form";
import { FormView } from "online-forms/shared/FormView";
import { FormData, IQuestion } from "online-forms/types";
import * as Styled from "./FormAnswersPreview.styled";

interface Props {
  questions: IQuestion[];
  control: IControl<FormData>;
  showPreview: boolean;
  register: IRegister<FormData>;
}

export const FormAnswersPreview = forwardRef(
  ({ questions, control, showPreview, register }: Props, ref) => {
    return (
      <Styled.Wrapper>
        <Styled.ScrollableContent ref={ref}>
          <h2>Form preview</h2>
          <Stack m={2} mt={0}>
            {showPreview ? (
              <FormView
                questions={questions}
                control={control}
                register={register}
                isEditable={false}
                isValueEditDisabled
              />
            ) : (
              <Styled.NoPreviewInfo>
                Pick answer to see form preview
              </Styled.NoPreviewInfo>
            )}
          </Stack>
        </Styled.ScrollableContent>
      </Styled.Wrapper>
    );
  }
);
