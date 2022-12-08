import { FC } from "react";
import { useDropzone, Accept } from "react-dropzone";
import styled from "styled-components";

interface Props {
  accept: Accept;
  maxFiles: number;
  label: string;
  onDrop: (acceptedFiles: File[]) => void;
}

const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
`;

const FileWrapper = styled.p`
  font-weight: 600;
`;

export const FileInput: FC<Props> = ({ label, maxFiles, accept, onDrop }) => {
  const { isDragActive, acceptedFiles, getRootProps, getInputProps } =
    useDropzone({ maxFiles, accept, onDrop });

  return (
    <Wrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>
          {label}
          <br />
          <em>
            ({maxFiles} files are the maximum number of files you can drop here)
          </em>
        </p>
      )}
      {acceptedFiles?.map((acceptedFile) => (
        <FileWrapper key={acceptedFile?.name}>{acceptedFile?.name}</FileWrapper>
      ))}
    </Wrapper>
  );
};
