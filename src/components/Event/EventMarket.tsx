import React,{useState} from 'react';
import styled from 'styled-components/native';
import Theme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Marquee from '../Marque/Marque';
import TextTicker from 'react-native-text-ticker';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import BetPlaceModal from './BetPlaceModal/BetPlaceModal';
const EventMarket = ({ title, markets, cashout, reverseColors = false, numberSession, messages, fancypermessages }) => {
  const [showPlaceBetModal, setShowPlaceBetModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  const openPlaceBetModal = (item, type) => {
    setSelectedItem(item);
    setSelectedType(type);
    setShowPlaceBetModal(true);
  };
  
  const closePlaceBetModal = () => {
    setShowPlaceBetModal(false);
    setSelectedItem(null);
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => {
      setTooltipIndex(null); // Hide tooltip
      Keyboard.dismiss(); // Optional: hide keyboard too
    }}>
    <Wrapper>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {cashout == 1 && (
          <CashoutButton
            cashout={cashout==1}
            onPress={() => {
              if (cashout) {
               openPlaceBetModal(markets, 'back', )
              }
            }}
          >
            <CashoutText>Cashout</CashoutText>
          </CashoutButton>
        )}
        {cashout == 0 && (
          <CashoutButton  
            disabled={cashout == 0}
          >
            <CashoutText>Cashout</CashoutText>
          </CashoutButton>
        )}
      </SectionHeader>
      { title=='Oddeven' &&(<MarketRow>
        <Maxbet numberOfLines={1}>Max: 5K</Maxbet>
        <PriceBox type="back" >
          <BakText>{reverseColors ? 'ODD' : 'BACK'}</BakText>
        </PriceBox>
        {numberSession != 1 && (<PriceBox type="back" >
          <BakText>{reverseColors ? 'EVEN' : 'BACK'}</BakText>
        </PriceBox>)}
      </MarketRow>)
}
{ title !='Oddeven' &&(<MarketRow>
        <Maxbet numberOfLines={1}>Max: 5K</Maxbet>
        <PriceBox type="back" reverseColors={reverseColors}>
          <BakText>{reverseColors ? 'NO' : 'BACK'}</BakText>
        </PriceBox>
        {numberSession != 1 && (<PriceBox type="lay" reverseColors={reverseColors}>
          <BakText>{reverseColors ? 'YES' : 'LAY'}</BakText>
        </PriceBox>)}
      </MarketRow>)
}
      {markets.map((item, index) => (
        <MarketRow key={index}>
          <MarketNameWrapper>
            <MarketName numberOfLines={1} >{item.name}</MarketName>
            {reverseColors && (
        <>
          <InfoIcon onPress={() => {
      if (tooltipIndex === index) {
        setTooltipIndex(null);
      } else {
        setTooltipIndex(index);
      }
    }}>

            <Icon name="information-circle" size={18} color="#333" />
          </InfoIcon>
          {tooltipIndex === index && (
            
        <TooltipBox>
          <TooltipTitle numberOfLines={0}>{item.name}</TooltipTitle>
          <TooltipText>Min: {item.min?.toLocaleString()} Max: {item.max?.toLocaleString()}</TooltipText>
        </TooltipBox>
       
      )}
        </>
      )}
          </MarketNameWrapper>
          { title != 'Oddeven' && item.back ? (
            <PriceTouchable onPress={() => openPlaceBetModal(item, 'back', )}>
            <PriceBox type="back" reverseColors={reverseColors}>
              <Price>{item.back}</Price>
              <SubText>{item.backSub}</SubText>
            </PriceBox>
            </PriceTouchable>
          ) : null}
          { title == 'Oddeven' && item.back ? (
            <PriceTouchable onPress={() => openPlaceBetModal(item, 'Odd', )}>
            <PriceBox type="lay" reverseColors={reverseColors} >
              <Price>{item.back}</Price>
              <SubText>{item.backSub}</SubText>
            </PriceBox>
            </PriceTouchable>
          ) : null}

        {title != 'Oddeven' && item.lay ? (
            <PriceTouchable onPress={() => openPlaceBetModal(item, 'lay')}>
            <PriceBox type="lay" reverseColors={reverseColors}>
              <Price>{item.lay}</Price>
              <SubText>{item.laySub}</SubText>
            </PriceBox>
            </PriceTouchable>
          ) : null}
          {title == 'Oddeven' && item.lay ? (
            <PriceTouchable onPress={() => openPlaceBetModal(item, 'Even')}>
            <PriceBox type="lay"  reverseColors={reverseColors}>
              <Price>{item.lay}</Price>
              <SubText>{item.laySub}</SubText>
            </PriceBox>
            </PriceTouchable>
          ) : null}
          {item.status=='suspended' && numberSession!=1  && (
            <SuspendedOverlay>
              <SuspendedText>{item.status}</SuspendedText>
            </SuspendedOverlay>
          )}
          {item.status=='Suspended' && numberSession==1  && (
            <SuspendedOverlayBackOnly>
              <SuspendedTextBackOnly>{item.status}</SuspendedTextBackOnly>
            </SuspendedOverlayBackOnly>
          )}
        </MarketRow>

      ))}
      {messages && (<StyledTicker
        duration={15000}
        loop
        bounce={false}
        repeatSpacer={50}
        marqueeDelay={1000}
      >
        {messages}
      </StyledTicker>)}
      
      {selectedItem && (
  <BetPlaceModal
    isVisible={showPlaceBetModal}
    onClose={closePlaceBetModal}
    item={selectedItem}
    type={selectedType}
    reverseColors={reverseColors}
  />
)}
    </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default EventMarket;
const Wrapper = styled.View`
  background-color: #fff;
`;

const SectionHeader = styled.View`
  background-color: ${({ theme }) => Theme.colors.inactiveTabBackground};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px 4px  10px;
`;

const SectionTitle = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 12px;
  padding:3px 0px;
`;

const CashoutButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => Theme.colors.backGround};
  padding: 4px 10px;
  border-radius: 4px;
  opacity: ${({ cashout }) => (cashout ? 1 : 0.5)};
`;

const CashoutText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const MarketRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom-width: 0.5px;
  border-bottom-color: #e2e8f0;
`;

const MarketName = styled.Text`
  flex: 1.8;
  font-size: 13px;
  font-weight: 400;
  color: #000;
  text-overflow: ellipsis;
`;

const Maxbet = styled.Text`
flex: 1.8;
  font-size: 13px;
padding-left:12px;
color:${({ theme }) => Theme.colors.minmax};
text-overflow: ellipsis;
font-weight:bold;
`;

const Price = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #000;
`;

const SubText = styled.Text`
  font-size: 10px;
  color: #000;
`;
const BakText = styled.Text`
font-size: 13px;
font-weight:400;
  color: #000;
`;
const PriceBox = styled.View`
  width: 80px;
  background-color: ${({ type, reverseColors }) => {
    if (reverseColors) {
      return type === 'back' ? Theme.colors.lay : Theme.colors.back;
    } else {
      return type === 'back' ? Theme.colors.back : Theme.colors.lay;
    }
  }};
  padding: 4px;
  align-items: center;
  justify-content: center;
`;
const MarketNameWrapper = styled.View`
  flex: 1.8;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;

// const InfoIcon = styled.View`
//   margin: 0 6px;
//   justify-content: center;
//   align-items: center;
// `;

const InfoIcon = styled.TouchableOpacity`
  margin: 0 6px;
  justify-content: center;
  align-items: center;
`;
const StyledTicker = styled(TextTicker)`
  font-size: 12px;
 color:${({ theme }) => Theme.colors.minmax};
  font-weight: bold;
  background-color: #fff;
  padding: 5px 10px;
`;
const SuspendedOverlay = styled.View`
 
 backgroundColor:rgba(55, 54, 54, 0.6) ;
  position: absolute;
  top: 0;
  left: 61%;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width :39%;
`;
const SuspendedOverlayBackOnly = styled.View`
 
 backgroundColor:rgba(55, 54, 54, 0.6) ;
  position: absolute;
  top: 0;
  left: 81%;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width :19.5%;
`;

const SuspendedText = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 14px;
  text-align :center;
  align-content:center;
 text-transform: uppercase;
`;
const SuspendedTextBackOnly = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 12px;
  text-align :center;
  align-content:center;

`;
const PriceTouchable = styled.TouchableOpacity``;

const TooltipBox = styled.View`
  background-color: #111827;
  padding: 4px 8px;
  bottom:20px;
  margin-top:20px;
  position: absolute;
  left: 190px;
  z-index: 2;
`;

const TooltipTitle = styled.Text`
  color: #d1d5db;
  font-size: 12px;
  background-color:#181818;
  margin-bottom: 2px;
`;

const TooltipText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight:bold;
`;
