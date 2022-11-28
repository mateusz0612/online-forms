import { FC } from "react";
import { TextField, Tile } from "libs/ui";
import { IFormState, IRegister } from "libs/development-kit/form";
import { IFormHeaderValues } from "../../FormCreator.types";
import * as Styled from "./FormHeader.styled";

interface Props {
  formState: IFormState<IFormHeaderValues>;
  register: IRegister<IFormHeaderValues>;
}

export const FormHeader: FC<Props> = ({ formState, register }) => {
  const { errors } = formState;

  return (
    <Tile width="100%">
      <Styled.Wrapper>
        <Styled.Heading align="center">Title</Styled.Heading>
        <Styled.HelperText align="center">
          (Provide title to let people the context of the form)
        </Styled.HelperText>
        <TextField
          label="Title"
          placeholder="Enter title..."
          error={!!errors?.name}
          helperText={errors?.name?.message}
          {...register("name")}
        />
        <Styled.Heading align="left">Description</Styled.Heading>
        <Styled.HelperText align="left">
          (Provide description to let people know something about this form)
        </Styled.HelperText>
        <TextField
          label="Description"
          placeholder="Enter description..."
          error={!!errors?.description}
          helperText={errors?.description?.message}
          inputMode="text"
          rows={5}
          multiline
          {...register("description")}
        />
      </Styled.Wrapper>
    </Tile>
  );
};
