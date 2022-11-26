import { FC } from "react";
import { Stack, Tile, Progress } from "libs/ui";
import { Renderer } from "libs/development-kit/api";
import { AnswerWithFormState } from "../../FormAnalyze.types";
import * as Styled from "./AnswerList.styled";

interface Props {
  answerWithFormState: AnswerWithFormState;
  pickedAnswerId: string;
  onPickedAnswerIdChange: (id: string) => void;
}

const Pending: FC = () => (
  <Stack width="100%" alignItems="center">
    <Progress />
  </Stack>
);

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
        pending={() => <Pending />}
        fail={() => <p>Error occured</p>}
      >
        {(answerWithForm) => {
          const { firstStateData: formAnswers } = answerWithForm;

          return (
            <Stack ml={3}>
              <Styled.AnswerLength>
                {formAnswers?.length} answers found
              </Styled.AnswerLength>
              {formAnswers?.map((formAnswer, index) => (
                <Stack
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
