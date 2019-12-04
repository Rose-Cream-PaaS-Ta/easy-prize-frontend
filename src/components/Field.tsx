import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 0 0.2rem;
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #4263eb;
  }
`;

interface IInputProps {
  className?: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: () => void;
}

const Field = ({ className, label, value, placeholder, onChange, ...props }: IInputProps) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </Container>
  );
};

export default Field;

export const StyledField = styled(props => <Field {...props} />)`
  margin-bottom: 1.2rem;
`;
