import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../constants/Theme';
const Sports = () => {
    const matchColors = ['#72bcee', '#f995b9', '#72bcee', '#f995b9', '#72bcee', '#f995b9'];
    return (
        <Container>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Indian Premier League</MatchTitle>
                    </LeftBlock>
                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>

                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 PM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>1</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>1.2</OddText>
                    </OddBox>
                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>4.3</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>4.0</OddText>
                    </OddBox>
                </OddsRow>

            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
            <MatchCard>
                <RowContainer>
                    <LeftBlock>
                        <MatchTitle numberOfLines={1}>Bangladesh Emerg W v SouthAfrica Emerg W</MatchTitle>

                    </LeftBlock>

                    <IconRow>
                        <GameIcon>
                            <ActiveDot />
                        </GameIcon>
                        <GameIcon>
                            <MaterialIcons name="live-tv" size={16} color="#000" />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_bm.png')} />
                        </GameIcon>
                        <GameIcon>
                            <IconImage source={require('../../../assets/images/ic_fancy.png')} />
                        </GameIcon>
                        <GameIcon />
                    </IconRow>
                </RowContainer>
                <MatchTime>09/05/2025 03:30 AM</MatchTime>
                <HeaderRow>
                    <HeaderCell><HeaderText>1</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>X</HeaderText></HeaderCell>
                    <HeaderCell><HeaderText>2</HeaderText></HeaderCell>
                </HeaderRow>
                <OddsRow>
                    <OddBox color={matchColors[0]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[1]}>
                        <OddText>-</OddText>
                    </OddBox>

                    <OddBox color={matchColors[2]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[3]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[4]}>
                        <OddText>-</OddText>
                    </OddBox>
                    <OddBox color={matchColors[5]}>
                        <OddText>-</OddText>
                    </OddBox>
                </OddsRow>
                <SuspendedLeft>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedLeft>
                <SuspendedRight>
                    <MaterialIcons name="lock" size={18} color="#fff" />
                </SuspendedRight>
            </MatchCard>
          
        </Container>
    );
};


const Container = styled(ScrollView)`
background-color:#f2f2f2;
 padding: 8px;
 margin-bottom:40%;
`;

const MatchCard = styled.View`
  margin-bottom: 4px;
  border-bottom-width: 0.5px;
  border-color: #d1d5db;
  padding-bottom: 10px;
`;


const OddsRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4px;
  overflow: hidden;
`;

const OddBox = styled.View<{ color: string }>`
  width: 16.66%;
  background-color: ${(props) => props.color};
  padding-vertical: 6px;
  justify-content: center;
  align-items: center;
`;

const OddText = styled.Text`
 font-family: '${Theme.textStyles.bodyfontsnew}';
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
const HeaderRow = styled.View`
  flex-direction: row;
  overflow: hidden;
`;

const HeaderCell = styled.View`
  width: 33.33%;
  padding-top: 4px;
  padding-bottom:0px;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
 font-family: '${Theme.textStyles.bodyfontsnew}';
  font-size: 10px;
  font-weight: 400;
  color: #374151;
`;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

const LeftBlock = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const MatchTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  width: 320px;
  letter-spacing: 0.5;
  font-family: '${Theme.textStyles.bodyfontsnew}';
`;
const MatchTime = styled.Text`
  font-size: 12px;
  color: #333333b3;
   font-family: '${Theme.textStyles.bodyfontsnew}';
  font-weight:100;
`;

const IconRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left:2px;
  gap: 2px;
`;

const GameIcon = styled.View`
  padding: 2px;
`;

const IconImage = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
`;

const ActiveDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color:#96cb04;
`;
const SuspendedLeft = styled.View`
  background-color: #37363680;
  position: absolute;
  width: 33.66%;
  height: 34px;
  bottom: 10%;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const SuspendedRight = styled.View`
  background-color: #37363680;
  position: absolute;
  width: 33.66%;
  height: 34px;
  left:66.66%;
  bottom: 10%;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;



export default Sports;
