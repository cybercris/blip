import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin-right: 8px;
  }
`

export const WrapperContainer = styled.div`
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${(props) => props.theme['gray-500']};
  }
`
