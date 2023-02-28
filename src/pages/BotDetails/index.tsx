import { Card } from '../../components/Card'
import { Button } from '../../components/Button'

import {
  AccountContainer,
  ActiveUsersContainer,
  CardsContainer,
  ContentContainer,
  DataContainer,
  DetailsContainer,
  FooterSeparator,
  GroupContainer,
  HeaderSeparator,
  MessagesReceivedContainer,
  MessagesSentContainer,
  RegionContainer,
  SectionContainer,
} from './styles'

import BotAvatarImg from '../../assets/bot-photo.svg'
import BalloonImg from '../../assets/balloon.svg'
import ActiveUserImg from '../../assets/active-user.svg'
import MessageReceivedImg from '../../assets/message-received.svg'
import MessageSentImg from '../../assets/message-sent.svg'

export function BotDetails() {
  return (
    <DetailsContainer>
      <header>
        <div>
          <img src={BotAvatarImg} alt="Bot Avatar" />
          <div>
            <h2>Botname</h2>
            <p>Id: botname</p>
          </div>
        </div>
        <p>Created at 11/09/2019</p>
      </header>
      <HeaderSeparator />
      <ContentContainer>
        <SectionContainer>
          <GroupContainer>
            <Card>
              <RegionContainer>
                <p>Region and idiom</p>
                <h5>EUA - English (EN)</h5>
                <p>Timezone</p>
                <h5>(UTC - 03:00) Brasília</h5>
              </RegionContainer>
            </Card>
            <Card>
              <ActiveUsersContainer>
                <img src={ActiveUserImg} alt="Active users" />
                <div>
                  <h1>1.000</h1>
                  <h4>Usuários ativos</h4>
                </div>
              </ActiveUsersContainer>
            </Card>
          </GroupContainer>
          <GroupContainer>
            <Card>
              <MessagesReceivedContainer>
                <img src={MessageReceivedImg} alt="Messages received" />
                <div>
                  <h1>1.000</h1>
                  <h4>Mensagens recebidas</h4>
                </div>
              </MessagesReceivedContainer>
            </Card>
            <Card>
              <MessagesSentContainer>
                <img src={MessageSentImg} alt="Messages sent" />
                <div>
                  <h1>1.000</h1>
                  <h4>Mensagens enviadas</h4>
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
      </ContentContainer>
      <FooterSeparator />
      <footer>
        <p>
          ©2019, BLiP Todos os direitos reservados <span>| Termos de Uso</span>
        </p>
      </footer>
    </DetailsContainer>
  )
}
