import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    font-size: 24px;
    color: #56616e;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #8ca0b3;
  }
`
