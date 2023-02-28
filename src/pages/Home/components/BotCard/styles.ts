import styled from 'styled-components'

export const BotCardContainer = styled.li`
  display: flex;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-850']};

    &:visited {
      color: inherit;
      text-decoration: none;
    }
  }
`

export const BotContainer = styled.div`
  display: flex;
  width: 11.75rem;
  height: 12rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h5 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 22px;
    color: ${(props) => props.theme['gray-850']};
  }

  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 22px;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const BotImg = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 2.5rem;
  background-color: red;
  margin-bottom: 16px;
`
