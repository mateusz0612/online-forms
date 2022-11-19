import { FC } from "react";
import {
  Stack,
  TextField,
  Select,
  Switch,
  SecondaryButton,
  DefaultButton,
  DeleteIcon,
} from "libs/ui";
import { QuestionFormProps } from "../../FormCreator.types";
import * as Styled from "./QuestionForm.styled";

export const QuestionForm: FC<QuestionFormProps> = ({
  register,
  answerRegister,
  onAddAnswerClick,
  onAddQuestionClick,
  onRemoveQuestionClick,
  currentPickedType,
  answers,
  control,
  formState,
  answerFormState,
}) => {
  const { errors } = formState;

  return (
    <Stack ml={3} mr={3}>
      <Styled.HelperText>Enter question content</Styled.HelperText>
      <TextField
        label="Content"
        placeholder="Enter content..."
        error={!!errors?.content}
        helperText={errors?.content?.message}
        {...register("content")}
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
            control={control}
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
        <Stack justifyContent="center" alignItems="center">
          <Styled.HelperText>Is this question required?</Styled.HelperText>
          <Switch name="required" control={control} defaultValue={false} />
        </Stack>
      </Stack>
      {currentPickedType === "options" && (
        <>
          <Stack width="52%" mt={2}>
            <Styled.HelperText>Add question options</Styled.HelperText>
            <TextField
              label="Answer"
              placeholder="Enter answer"
              error={!!answerFormState?.errors?.content}
              helperText={answerFormState?.errors?.content?.message}
              {...answerRegister("content")}
            />
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
              <DefaultButton key={id} onClick={() => onRemoveQuestionClick(id)}>
                {content}
                <DeleteIcon />
              </DefaultButton>
            ))}
          </Stack>
        </>
      )}
      <Styled.Submit onClick={onAddQuestionClick}>Add</Styled.Submit>
    </Stack>
  );
};
