import { FC } from "react";
import { Stack, Progress } from "libs/ui";
import { Renderer } from "libs/development-kit/api";
import { AnswerWithFormState } from "../../FormAnalyze.types";
import { PickableTag } from "../PickableTag";
import * as Styled from "./AnswerList.styled";

interface Props {
  answerWithFormState: AnswerWithFormState;
  pickedAnswerId: string;
  onPickedAnswerIdChange: (id: string) => void;
}

export const AnswerList: FC<Props> = ({
  answerWithFormState,
  pickedAnswerId,
  onPickedAnswerIdChange,
}) => {
  return (
    <Styled.Wrapper>
      <h3>Answers</h3>
      <Renderer
        state={answerWithFormState}
        pending={() => (
          <Stack width="100%" alignItems="center">
            <Progress />
          </Stack>
        )}
        fail={() => <p>Error occured</p>}
      >
        {(answersWithForm) => {
          const { firstStateData: formAnswers, secondStateData: form } =
            answersWithForm;

          return (
            <Stack ml={3} pb={2} overflow="auto">
              <Styled.AnswerInfo>
                {formAnswers?.length} answers found <br />
                <span>for {form?.name}</span>
              </Styled.AnswerInfo>
              {formAnswers?.map((formAnswer, index) => (
                <Stack
                  key={formAnswer?.id}
                  mt={2}
                  onClick={() => onPickedAnswerIdChange(formAnswer?.id)}
                >
                  <PickableTag
                    isPicked={pickedAnswerId === formAnswer?.id}
                    label={`Answer ${index + 1}`}
                  />
                </Stack>
              ))}
            </Stack>
          );
        }}
      </Renderer>
    </Styled.Wrapper>
  );
};
