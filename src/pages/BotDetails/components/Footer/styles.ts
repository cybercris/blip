import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1.3rem;

  hr {
    height: 2px;
    border-color: ${(props) => props.theme['gray-400']};
    margin-top: 44px;
    margin-bottom: 16px;
  }

  p {
    text-align: center;
  }

  span {
    font-weight: 700;
  }
`
