import { FC } from "react";
import { TextField, Tile } from "libs/ui";
import { IFormState, IControl } from "libs/development-kit/form";
import { IFormHeaderValues } from "../../FormCreator.types";
import * as Styled from "./FormHeader.styled";

interface Props {
  control: IControl<IFormHeaderValues>;
}

export const FormHeader: FC<Props> = ({ control }) => {
  return (
    <Tile width="100%">
      <Styled.Wrapper>
        <Styled.Heading align="center">Title</Styled.Heading>
        <Styled.HelperText align="center">
          (Provide title to let people the context of the form)
        </Styled.HelperText>
        <TextField
          name="name"
          label="Title"
          placeholder="Enter title..."
          control={control}
        />
        <Styled.Heading align="left">Description</Styled.Heading>
        <Styled.HelperText align="left">
          (Provide description to let people know something about this form)
        </Styled.HelperText>
        <TextField
          name="description"
          label="Description"
          placeholder="Enter description..."
          inputMode="text"
          rows={5}
          multiline
          control={control}
        />
      </Styled.Wrapper>
    </Tile>
  );
};
