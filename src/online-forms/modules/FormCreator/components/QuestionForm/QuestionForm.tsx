import { FC } from "react";
import {
  Stack,
  TextField,
  Select,
  Switch,
  SecondaryButton,
  DeleteIcon,
} from "libs/ui";
import { QuestionFormProps } from "../../FormCreator.types";
import * as Styled from "./QuestionForm.styled";

export const QuestionForm: FC<QuestionFormProps> = ({
  currentPickedType,
  answers,
  questionControl,
  answerControl,
  onAddAnswerClick,
  onAddQuestionClick,
  onRemoveQuestionClick,
}) => {
  return (
    <Stack ml={3} mr={3}>
      <Styled.HelperText>Enter question content</Styled.HelperText>
      <TextField
        name="content"
        label="Content"
        placeholder="Enter content..."
        control={questionControl}
      />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Styled.HelperText>Choose quesiton type</Styled.HelperText>
          <Select
            label="Type"
            placeholder="Type"
            style={Styled.SelectStyles}
            defaultValue="options"
            name="type"
            control={questionControl}
            renderMenuItems={(MenuItem) => [
              <MenuItem key="boolean" value="boolean">
                True/False
              </MenuItem>,
              <MenuItem key="text" value="text">
                User input
              </MenuItem>,
              <MenuItem key="options" value="options">
                Options
              </MenuItem>,
            ]}
          />
        </Stack>
        <Styled.SwitchWrapper justifyContent="center" alignItems="center">
          <Styled.HelperText>Is this question required?</Styled.HelperText>
          <Switch
            name="required"
            control={questionControl}
            defaultValue={false}
          />
        </Styled.SwitchWrapper>
      </Stack>
      {currentPickedType === "options" && (
        <>
          <Stack width="100%" mt={2}>
            <Styled.HelperText>Add question options</Styled.HelperText>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField
                name="content"
                label="Answer"
                placeholder="Enter answer"
                control={answerControl}
              />
              <Styled.SwitchWrapper justifyContent="center" alignItems="center">
                <Styled.HelperText>Multiple answers enabled?</Styled.HelperText>
                <Switch
                  name="multiple"
                  control={questionControl}
                  defaultValue={false}
                />
              </Styled.SwitchWrapper>
            </Stack>
            <SecondaryButton
              style={{ width: "15%", marginTop: "10px" }}
              onClick={onAddAnswerClick}
            >
              Add
            </SecondaryButton>
          </Stack>
          <Styled.HelperText>Added options</Styled.HelperText>
          <Stack flexDirection="row" flexWrap="wrap" gap={1}>
            {answers?.map(({ id, content }) => (
              <Styled.Answer key={id} onClick={() => onRemoveQuestionClick(id)}>
                {content}
                <DeleteIcon />
              </Styled.Answer>
            ))}
          </Stack>
        </>
      )}
      <Styled.Submit onClick={onAddQuestionClick}>Add</Styled.Submit>
    </Stack>
  );
};
