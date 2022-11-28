import { FC } from "react";
import { Stack, Progress } from "libs/ui";
import { Renderer } from "libs/development-kit/api";
import { AnswerWithFormState } from "../../FormAnalyze.types";
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
          const { firstStateData: formAnswers } = answersWithForm;

          return (
            <Stack ml={3} pb={2} overflow="auto">
              <Styled.AnswerLength>
                {formAnswers?.length} answers found
              </Styled.AnswerLength>
              {formAnswers?.map((formAnswer, index) => (
                <Stack
                  key={formAnswer?.id}
                  mt={2}
                  onClick={() => onPickedAnswerIdChange(formAnswer?.id)}
                >
                  <Styled.Answer isPicked={pickedAnswerId === formAnswer?.id}>
                    Answer {index + 1}
                  </Styled.Answer>
                </Stack>
              ))}
            </Stack>
          );
        }}
      </Renderer>
    </Styled.Wrapper>
  );
};
