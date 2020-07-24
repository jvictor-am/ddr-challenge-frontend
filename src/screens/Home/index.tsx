import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import ChartIcon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Header,
  TextHeader,
  Avatar,
  BlueCard,
  Alarm,
  Title2,
  MainCard,
  FirstRow,
  SecondRow,
  BlueOne,
  InfinityDdr,
  DetailsBlueOne,
  DetailsInfinityDdr,
  Info,
  VerMais,
  Name,
  ApiClient,
  Api,
  Client,
  RefactoringCard,
  Title,
  TitleLastCard,
  Description,
  Date,
  BackgroundIcon,
} from './styles';

const screens: React.FC = () => {
  return (
    <Container>
      <Header>
        <Icon name="menu" color="#000" size={20} />
        <TextHeader>Dashboard</TextHeader>
        <Avatar source={require('../../assets/JV.jpg')} />
      </Header>

      <LinearGradient
        start={{ x: 0.8, y: 1.2 }}
        end={{ x: 1.2, y: 0 }}
        colors={['#1089FF', '#23374D']}
        style={{
          zIndex: 10,
          width: '80%',
          height: '18%',
          alignSelf: 'center',
          marginTop: '11%',
          borderRadius: 22,
        }}
      >
        <BlueCard>
          <Alarm>Alarmes</Alarm>
          <Title2>Falha na replicação das gravações do matching</Title2>
        </BlueCard>
      </LinearGradient>

      <MainCard>
        <FirstRow>
          <BlueOne source={require('../../assets/Imagem1.png')} />
          <DetailsBlueOne>
            <Info>
              <Name>Blueone</Name>
              <ApiClient>
                <Api>API: ON</Api>
                <Client>CLIENT: WORKING</Client>
              </ApiClient>
            </Info>
            <VerMais>VER MAIS</VerMais>
          </DetailsBlueOne>
        </FirstRow>
        <SecondRow>
          <InfinityDdr source={require('../../assets/Imagem2.png')} />
          <DetailsInfinityDdr>
            <Info>
              <Name>Infinity</Name>
              <ApiClient>
                <Api>API: ON</Api>
                <Client>CLIENT: WORKING</Client>
              </ApiClient>
            </Info>
            <VerMais>VER MAIS</VerMais>
          </DetailsInfinityDdr>
        </SecondRow>
      </MainCard>

      <Title>Próximo Ticket:</Title>

      <RefactoringCard>
        <TitleLastCard>Refatoração</TitleLastCard>
        <Description>Refatorar segunda etapa do matching</Description>
        <Date>11/09/2020</Date>
      </RefactoringCard>

      <BackgroundIcon>
        <ChartIcon name="chart-line" color="#E5E5E5" size={24} />
      </BackgroundIcon>
    </Container>
  );
};

export default screens;
