import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventScreen from '../../screens/Event/EventScreen';
import { useNavigation } from '@react-navigation/native';
const ExposureModal = ({ isVisible, onClose }) => {
const navigation = useNavigation();

  return (
    <StyledModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <Container>
        <Header>
          <Divider />
        </Header>

        <HeaderTitle>
          <Title>My Market</Title>
        </HeaderTitle>

         {/* <HorizontalScroll>
          <ContentWrapper>
            <TableHeader>
              <ColumnText width="80px">Type</ColumnText>
              <ColumnText width="200px">Event Name</ColumnText>
              <RefreshIcon>
                <Ionicons name="refresh" size={18} color="#fff" />
              </RefreshIcon>
              <ColumnText width="120px">Market Name</ColumnText>
              <ColumnText width="100px">No. Of Trade</ColumnText>
            </TableHeader>

            <ScrollContainer>
              <MarketRow>
                <CellText width="80px">Tennis</CellText>
                <EventLink width="200px"  onPress={()=>{navigation.navigate('EventScreen'); onClose();}}>
                  Konstantin Zhzhenov - Edoardo Cherie Ligniere
                </EventLink>
                <CellText width="120px">MATCH_ODDS</CellText>
                <CellText width="100px">1</CellText>
              </MarketRow>

              <MarketRow>
                <CellText width="80px">Tennis</CellText>
                <EventLink width="200px" onPress={()=>{navigation.navigate('EventScreen'); onClose();}}>Player A - Player B</EventLink>
                <CellText width="120px">MATCH_ODDS</CellText>
                <CellText width="100px">2</CellText>
              </MarketRow>
             </ScrollContainer>
          </ContentWrapper> 
        </HorizontalScroll> */}
                  <TopIconWrapper>
                    <Ionicons name="reader-outline" size={60} color="rgba(148, 163, 177, 0.91);" />
                    <NodataText>No Data</NodataText>
                  </TopIconWrapper>
                 
      </Container>
    </StyledModal>
  );
};

export default ExposureModal;
const StyledModal = styled(Modal)``;

const Container = styled.View`
  background-color: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0px 12px;
  max-height: 90%;
`;

const Header = styled.View`
  align-items: center;
`;

const Divider = styled.View`
  height: 1px;
  width: 40px;
  background-color: #ccc;
  border-radius: 2px;
  margin:8px;
`;

const HeaderTitle = styled.View`
  margin: 15px;
  
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:#000;
`;

const HorizontalScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
}))``;

const ContentWrapper = styled.View`
  min-width: 600px;
`;

const TableHeader = styled.View`
  flex-direction: row;

  padding: 8px;
  border-bottom-width: 1px;
   justify-content:center;
  border-bottom-color: #ddd;
  background-color: #2c3e50e8;
`;

const ColumnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  ${({ width }) => `width: ${width};`}
`;


const ScrollContainer = styled.ScrollView`
  max-height: 300px;
  
`;

const MarketRow = styled.View`
  flex-direction: row;
justify-content:center;
   text-align:center;
  margin-top: 12px;
  margin-left:0px;
`;

const CellText = styled.Text`
font-size: 14px;
text-align: center;
color:#000;
${({ width }) => `width: ${width};`}
`;

const RefreshIcon = styled.TouchableOpacity `
padding-right:5px;
`;
const EventLink = styled.Text`
  font-size: 14px;
  color: blue;
  text-decoration: underline;
  text-align: center;
  ${({ width }) => `width: ${width};`}
`;

const EmptyText = styled.Text`
  font-size: 14px;
  color:rgba(148, 163, 177, 0.91);
  font-weight: bold;

`;

const NodataText = styled.Text`
  font-size: 15px;
  color:#5e7994fa;
  font-weight: bold;

`;

const TopIconWrapper = styled.View`
  align-items: center;
  justfiy-content: center;
  background-color:transparent;
  padding: 16px 0px;
`;

