import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 2.5rem;
  margin-right: 0.5rem;
  padding: 10px 16px;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['blue-500']};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme['blue-600']};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-400']};
  }

  &:active {
    background-color: ${(props) => props.theme['blue-700']};
  }
`
