import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    height: 2px;
    border-color: #b9cbd3;
  }

  footer {
    display: flex;
    flex: 1;
    justify-content: center;
    background-color: red;
  }
`

export const HeaderSeparator = styled.hr`
  margin-top: 32px;
  margin-bottom: 24px;
`

export const FooterSeparator = styled.hr`
  margin-top: 44px;
  margin-bottom: 16px;
`
