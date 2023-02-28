import { Card } from '../../../../components/Card'
import { Button } from '../../../../components/Button'

import { BotDetailed } from '../../../../@types'

import BalloonImg from '../../../../assets/balloon.svg'
import ActiveUserImg from '../../../../assets/active-user.svg'
import MessageReceivedImg from '../../../../assets/message-received.svg'
import MessageSentImg from '../../../../assets/message-sent.svg'

import {
  AccountContainer,
  ActiveUsersContainer,
  GroupContainer,
  MessagesReceivedContainer,
  MessagesSentContainer,
  RegionContainer,
  SectionContainer,
  SummaryContainer,
} from './styles'

interface SummaryProps {
  bot: BotDetailed
}

export function Summary({ bot }: SummaryProps) {
  return (
    <SummaryContainer>
      <SectionContainer>
        <GroupContainer>
          <Card mr={22}>
            <RegionContainer>
              <p>Region and idiom</p>
              <h5>{bot?.culture}</h5>
              <p>Timezone</p>
              <h5>(UTC - 03:00) Brasília</h5>
            </RegionContainer>
          </Card>
          <Card grow>
            <ActiveUsersContainer>
              <img src={ActiveUserImg} alt="Active users" />
              <div>
                <h1>{bot?.analytics?.user?.actived}</h1>
                <h4>Usuários ativos</h4>
              </div>
            </ActiveUsersContainer>
          </Card>
        </GroupContainer>
        <GroupContainer>
          <Card mr={24}>
            <MessagesReceivedContainer>
              <img src={MessageReceivedImg} alt="Messages received" />
              <div>
                <h1>{bot?.analytics?.message?.received}</h1>
                <h4>Mensagens recebidas</h4>
              </div>
            </MessagesReceivedContainer>
          </Card>
          <Card grow>
            <MessagesSentContainer>
              <img src={MessageSentImg} alt="Messages sent" />
              <div>
                <h1>{bot?.analytics?.message?.sent}</h1>
                <h4>Mensagens recebidas</h4>
              </div>
            </MessagesSentContainer>
          </Card>
        </GroupContainer>
      </SectionContainer>
      <AccountContainer>
        <img src={BalloonImg} alt="Balloon" />
        <p>Status account</p>
        <h3>Free</h3>
        <Button>Update account</Button>
      </AccountContainer>
    </SummaryContainer>
  )
}
