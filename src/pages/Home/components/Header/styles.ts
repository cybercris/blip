import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  input {
    width: 19.5rem;
    height: 2.5rem;
    padding: 10px 12px;
    margin-right: 8px;
    border: 1px solid ${(props) => props.theme['gray-350']};
    border-radius: 8px;
    background-color: ${(props) => props.theme.white};
  }

  input::placeholder {
    font-weight: 600;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
  }

  img {
    height: 2rem;
  }

  hr {
    margin: 40px 0;
  }
`
