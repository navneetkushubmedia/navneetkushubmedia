import React, { useState } from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import Theme from '../../../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import u from '../../../utils/unit';
const BetPlaceModal = ({ isVisible, onClose, item, type, reverseColors }) => {
    const [odds, setOdds] = useState(() => {
        const back = parseFloat(item?.back);
        const lay = parseFloat(item?.lay);
        if (type === 'back' && !isNaN(back) && back > 0) {
            return back;
        } else if (type === 'lay' && !isNaN(lay) && lay > 0) {
            return lay;
        }
        return 0;
    });
    const [isProfitVisible, setIsProfitVisible] = useState(false);
    const [amount, setAmount] = useState('');
    const numericAmount = parseFloat(amount) || 0;
    const profit = ((numericAmount * odds) - numericAmount).toFixed(0);
 const navigation= useNavigation();

 const ediStacke = ()=>{
  onClose();
  navigation.navigate('EditStackScreen');
 }
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            swipeDirection="down"
            onSwipeComplete={onClose}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            propagateSwipe={true}
            avoidKeyboard={true}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            useNativeDriver={true}
            type="back"
        >
            <ModalContainer type={type} reverseColors={reverseColors}>
                <HeaderSection type={type} reverseColors={reverseColors}>
                <HeaderLine />
                <Title>Place Bet</Title>
                </HeaderSection>
                <ModalView>
                <RowContainer>
                    <TeamName>{item?.name || 'Unknown Team'}</TeamName>
                    {isProfitVisible && (<ProfitBox>
                            <ProfitLabel>Profit</ProfitLabel>
                            <ProfitValue>: {Number(profit).toLocaleString()} </ProfitValue>
                            <Icon name="checkmark-circle" size={20} color="#4dab4e" />
                        </ProfitBox>)}
                    </RowContainer>
                    
                    <InputRow>
                        <InputGroup>
                            <Label>Odds</Label>
                            <InputWrapper>
                                <ControlButton onPress={() => setOdds(prev => +(prev - 0.01).toFixed(2))}>
                                    <ControlText>-</ControlText>
                                </ControlButton>
                                <ValueText>{odds}</ValueText>
                                <ControlButton onPress={() => setOdds(prev => +(prev + 0.01).toFixed(2))}>
                                    <ControlText>+</ControlText>
                                </ControlButton>
                            </InputWrapper>
                        </InputGroup>

                        <InputGroup>
                            <Label>Amount</Label>

                            <InputWrapper>
                                <ControlButton onPress={() => setAmount(prev => Math.max((+prev || 0) - 1, 0))}>
                                    <ControlText>-</ControlText>
                                </ControlButton>
                                <AmountInput
                                    value={amount.toString()}
                                    onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ''))}
                                    keyboardType="numeric"
                                    placeholder="Amount"
                                />
                                <ControlButton onPress={() => setAmount(prev => (+prev || 0) + 1)}>
                                    <ControlText>+</ControlText>
                                </ControlButton>
                            </InputWrapper>
                        </InputGroup>

                    </InputRow>
                    
                    <EditContainer>
                    <Divider />
                    <EditBox onPress={ediStacke}>
                    <EditText> Edit </EditText>
                    <EditIcon name="edit" size={14} color="#2c3e50e8" />
                    </EditBox>   
      <Dividertwo />
    </EditContainer>
                    
                    <AmountButtonsContainer>
                        {['1k', '2k', '5k', '10k', '20k', '25k', '50k', '75k', '90k', '95k'].map(val => (
                            <AmountButton
                                key={val}
                                onPress={() => {
                                    const numericValue = val.toLowerCase().includes('k')
                                        ? parseInt(val) * 1000
                                        : parseInt(val);
                                    setAmount(prev => (+prev || 0) + numericValue);
                                    setIsProfitVisible(true);
                                }}
                            >
                                <AmountText>+ {val}</AmountText>
                            </AmountButton>
                        ))}
                    </AmountButtonsContainer>


                    <PlaceBetButton onPress={onClose}>
                        <PlaceBetText>Place bet</PlaceBetText>
                    </PlaceBetButton>


  <ProfitLossSummary>
  <SummaryRow>
    <SummaryText>Konstantin Zhzhenov</SummaryText>
    <MiddleValue >0</MiddleValue>
    <SummaryValue isProfit={true}>{profit}</SummaryValue>
  </SummaryRow>
  <SummaryRow>
    <SummaryText>Edoardo Cherie Ligniere</SummaryText>
    <MiddleValue >0</MiddleValue>
    <SummaryValue isProfit={false}>-1,000</SummaryValue>
  </SummaryRow>
</ProfitLossSummary>

                </ModalView>
            </ModalContainer>
        </Modal>
    );
};

export default BetPlaceModal;

const HeaderSection = styled.View`
  background-color: ${({ type, reverseColors }) =>
        reverseColors
            ? type === 'back'
                ? Theme.colors.lay // lay ka color
                : Theme.colors.back // BACK ka color
            : type === 'back'
                ? Theme.colors.back
                : Theme.colors.lay};
  padding: 2px 16px;
  padding-bottom:16px;
`;

const ModalContainer = styled.View`
  background-color: ${({ type, reverseColors }) =>
        reverseColors
            ? type === 'back'
                ? 'rgb(243 198 218)'
                : 'rgb(179 216 242);'

            : type === 'back'
                ? 'rgb(179 216 242);'
                : 'rgb(243 198 218)'};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
`;


const HeaderLine = styled.View`
  width: 30px;
  height: 1.5px;
  background-color: #2c3e50;
  align-self: center;
  border-radius: 2px;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const TeamName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  width:60%;
  margin: 2px 0;
 color: ${({ theme }) => Theme.colors.black};
`;

const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0;
  background-color:#ffffff57;
  padding:8px;

`;

const InputGroup = styled.View`
  width: 48%;
`;

const Label = styled.Text`
  font-size: 14px;
  color: #2c3e50;
  text-align:center;
  font-weight:300;
  margin-bottom: 4px;
`;

const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px;
  justify-content: space-between;
`;

const ControlButton = styled.TouchableOpacity`
  padding: 6px;
`;

const ControlText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color:#000;
`;

const ValueText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color:#000;
`;

const AmountButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 0px 0px 10px ;
  justify-content: flex-start;
`;

const AmountButton = styled.TouchableOpacity`
  width: 23%;
  background-color: #2c3e50e8;
  padding:8px 13px;
  margin-bottom: 10px;
  border-radius: 4px;
  align-items: center;
  margin: 0 1.5% 8px 0; 
`;

const AmountText = styled.Text`
  color: #fff;
  font-weight:500;
  font-size:13px;
`;

const PlaceBetButton = styled.TouchableOpacity`
  background-color: #2c3e50;
  padding: 14px;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 12px;
  align-items: center;
`;

const PlaceBetText = styled.Text`
  color: white;
  font-size: 16px;
  color:#fff;
  letter-spacing:2px;
  font-weight: bold;
`;
const ModalView = styled.View`
  padding:8px 16px;
`;
const AmountInput = styled.TextInput`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  flex: 1;
  padding:0;
  text-align: center;
`;
const ProfitBox = styled.View`
flex-direction: row;
  padding: 4px;
  background-color: #c9e7c9;
  border-radius: 4px;
  align-items: center;
`;

const ProfitLabel = styled.Text`
  font-size: 14px;
  color: #34495e;
  font-weight: bold;
`;

const ProfitValue = styled.Text`
  font-size: 14px;
  color: #2c3e50;
  font-weight: bold;
`;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const EditContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 4px;
  border-radius: 4px;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom:14px;
`;
const EditBox= styled.TouchableOpacity`
background-color:#ffffff57;
flex-direction:row;
padding:3px;
border-radius:2px;
`;

const EditText = styled.Text`
  font-size: 12px;
  color: #2c3e50e8;
  margin-left: 4px;
`;
const Divider = styled.View`
  width: 60px;
  height: 0.5px;
  background-color:#2c3e50e8;
  margin-veritcal: 0.5px;
  margin-right:8px;
`;

const Dividertwo = styled.View`
  width: 30px;
  height: 0.5px;
  margin-left:8px;
  background-color:#2c3e50e8;
  margin-veritcal: 0.5px;
`;
const ProfitLossSummary = styled.View`
  background-color: #ffffff57;
  padding:  8px;
`;

const SummaryRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const SummaryText = styled.Text`
  width: 30%;
  font-size: 12px;
  color: #2c3e50;

`;

const SummaryValue = styled.Text`
  width: 30%;
  font-size: 12px;
  font-weight: bold;
  color: ${({ isProfit }) => (isProfit ? 'green' : 'red')};
  text-align: right;
`;

const MiddleValue = styled.Text`
  width: 10%;
  font-size: 12px;
  font-weight: bold;
  color:#000;
  text-align: right;
`;

