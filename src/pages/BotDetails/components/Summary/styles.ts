import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const GroupContainer = styled.div`
  display: flex;
`

export const DataContainer = styled.div`
  display: flex;
  height: 13.25rem;

  img {
    height: 3.5rem;
    margin-right: 16px;
  }

  p {
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #52636c;
  }

  h5 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #52636c;
  }

  h1 {
    font-weight: 800;
    font-size: 24px;
    color: #52636c;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    color: #52636c;
  }
`

export const RegionContainer = styled(DataContainer)`
  flex-direction: column;
  width: 18.38rem;
  padding-top: 32px;
  padding-left: 40px;
`

export const ActiveUsersContainer = styled(DataContainer)`
  align-items: center;
  width: 38.31rem;
  padding-left: 32px;
`

export const MessagesReceivedContainer = styled(DataContainer)`
  align-items: center;
  padding-left: 32px;
  margin-right: 24px;
  width: 31.56rem;
`

export const MessagesSentContainer = styled(DataContainer)`
  align-items: center;
  display: flex;
  padding-left: 32px;
  width: 25rem;
`

export const AccountContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 50px;
    height: 12.5rem;
  }

  h3 {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 24px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #8ca0b3;
    margin-bottom: 4px;
  }
`
