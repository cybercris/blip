import styled from 'styled-components'

export const LineContainer = styled.li`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    flex: 1;
    color: ${(props) => props.theme['gray-850']};

    &:visited {
      color: inherit;
      text-decoration: none;
    }
  }
`

export const BotContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  flex: 1;
  align-items: center;
`

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const BotImg = styled.div`
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 14px;
  background-color: red;
  margin-right: 8px;
`
