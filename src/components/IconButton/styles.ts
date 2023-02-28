import styled from 'styled-components'

interface ButtonContainerProps {
  opacity?: Number
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${(props) => Number(props.opacity) || 1};

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
  }
`
