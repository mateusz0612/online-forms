import { FC } from "react";
import { Stack, Tile } from "libs/ui";
import { useFormCreator } from "../logic";
import { FormHeader } from "../components";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  width: 90vw;

  @media ${(props) => props.theme.queries.tablet} {
    width: 60vw;
  }

  @media ${(props) => props.theme.queries.desktop} {
    width: 40vw;
  }
`;

export const FormCreatorContainer: FC = () => {
  const {
    isFormHeaderEdited,
    formHeaderRef,
    formState,
    values,
    register,
    onFormHeaderClick,
  } = useFormCreator();

  return (
    <Wrapper width="50vw" margin="auto" mt={4}>
      <Tile width="100%">
        <FormHeader
          isEditMode={isFormHeaderEdited}
          ref={formHeaderRef}
          values={values}
          formState={formState}
          register={register}
          onFormHeaderClick={onFormHeaderClick}
        />
      </Tile>
    </Wrapper>
  );
};
