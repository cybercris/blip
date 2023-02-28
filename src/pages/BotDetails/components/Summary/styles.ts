import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
  flex: 1;
`

export const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:first-child {
    margin-bottom: 24px;
  }
`

export const DataContainer = styled.div`
  display: flex;
  height: 13.25rem;
  flex-wrap: wrap;
  flex: 1;

  img {
    height: 3.5rem;
    margin-right: 16px;
  }

  p {
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 16px;
    color: ${(props) => props.theme['gray-850']};
  }

  h5 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 16px;
    color: ${(props) => props.theme['gray-850']};
  }

  h1 {
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-850']};
  }

  h4 {
    font-weight: 400;
    font-size: 0.88rem;
    color: ${(props) => props.theme['gray-850']};
  }
`

export const RegionContainer = styled(DataContainer)`
  flex-direction: column;
  min-width: 17rem;
  padding-top: 32px;
  padding-left: 40px;

  @media (min-width: 1080px) {
    width: 15rem;
  }
`

export const ActiveUsersContainer = styled(DataContainer)`
  align-items: center;
  width: 23rem;
  padding-left: 32px;

  @media (max-width: 1080px) {
    width: 20rem;
  }
`

export const MessagesReceivedContainer = styled(DataContainer)`
  align-items: center;
  width: 20rem;
  padding-left: 32px;
  margin-right: 24px;

  @media (max-width: 1080px) {
    width: 18rem;
  }
`

export const MessagesSentContainer = styled(DataContainer)`
  display: flex;
  align-items: center;
  width: 19rem;
  padding-left: 32px;

  @media (max-width: 1080px) {
    width: 17rem;
  }
`

export const AccountContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  img {
    margin-bottom: 3.1rem;
    height: 12.5rem;

    @media (max-width: 1080px) {
      margin-bottom: 2rem;
      height: 9rem;
    }
  }

  h3 {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 4px;
  }
`
