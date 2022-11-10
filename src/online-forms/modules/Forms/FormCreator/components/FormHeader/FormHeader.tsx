import { forwardRef, RefObject } from "react";
import { Stack, TextField } from "libs/ui";
import { IFormState, IRegister } from "libs/development-kit/form";
import { IFormHeaderValues } from "../../FormCreator.types";
import * as Styled from "./FormHeader.styled";

interface Props {
  isEditMode: boolean;
  values: IFormHeaderValues;
  formState: IFormState<IFormHeaderValues>;
  register: IRegister<IFormHeaderValues>;
  onFormHeaderClick: () => void;
}

export const FormHeader = forwardRef(
  (
    { isEditMode, values, formState, register, onFormHeaderClick }: Props,
    ref
  ) => {
    const { errors } = formState;

    return (
      <div ref={ref as RefObject<HTMLDivElement>} onClick={onFormHeaderClick}>
        <Styled.Wrapper>
          <Styled.Heading align="center">Title</Styled.Heading>
          <Styled.HelperText align="center">
            (Provide title to let people the context of the form)
          </Styled.HelperText>
          {isEditMode ? (
            <TextField
              label="Title"
              placeholder="Enter title..."
              error={!!errors?.name}
              helperText={errors?.name?.message}
              {...register("name")}
            />
          ) : (
            <Styled.Label align="center">{values?.name}</Styled.Label>
          )}
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
            style={{
              // Added to fix MUI Bug when MUI TextField multiline creates
              // infinite render loop because it cannot adjust size of
              // TextField with conditional rendering
              display: isEditMode ? "inline-flex" : "none",
            }}
            {...register("description")}
          />
          {!isEditMode && (
            <Styled.Label align="left">{values?.description}</Styled.Label>
          )}
          {!isEditMode && (
            <Styled.HelperText align="center">
              (Click here to edit)
            </Styled.HelperText>
          )}
        </Styled.Wrapper>
      </div>
    );
  }
);
