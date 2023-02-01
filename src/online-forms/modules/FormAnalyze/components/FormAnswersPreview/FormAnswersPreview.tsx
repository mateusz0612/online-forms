import { forwardRef } from "react";
import { Stack } from "libs/ui";
import { IControl } from "libs/development-kit/form";
import { FormView } from "online-forms/modules/FormView";
import { FormData, IQuestion } from "online-forms/types";
import * as Styled from "./FormAnswersPreview.styled";

interface Props {
  questions: IQuestion[];
  control: IControl<FormData>;
  showPreview: boolean;
  onQuestionClick: (id: string) => void;
}

export const FormAnswersPreview = forwardRef(
  ({ questions, control, showPreview, onQuestionClick }: Props, ref) => {
    return (
      <Styled.Wrapper>
        <Styled.ScrollableContent ref={ref}>
          <h2>Form preview</h2>
          <Stack m={2} mt={0}>
            {showPreview ? (
              <FormView
                questions={questions}
                control={control}
                isEditable={false}
                onQuestionClick={onQuestionClick}
                isValueEditDisabled
              />
            ) : (
              <Styled.NoPreviewInfo>
                Pick answer in <span>answers</span> to see form preview
              </Styled.NoPreviewInfo>
            )}
          </Stack>
        </Styled.ScrollableContent>
      </Styled.Wrapper>
    );
  }
);
