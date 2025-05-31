// DemoModal.js
import React,{useState} from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fornicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const UsemenuModal = ({ isVisible, onClose, showBalance,
  setShowBalance,
  showExposure,
  setShowExposure, }) => {
  
 const  navigation = useNavigation();
 const handleLogout = () => {
    // Clear token or session here
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  };
  return (
    <StyledModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={{ justifyContent: 'flex-end', margin: 0 }}
      swipeDirection="down"
      onSwipeComplete={onClose}
      propagateSwipe
    >
      <ModalContainer>
        <DragBar />

        <SectionTitle>Reports</SectionTitle>

        <OptionList>
      <OptionButton onPress={() => {navigation.navigate('AccountStatementScreen'); onClose();}}>
        <OptionText>Account Statement</OptionText>
        <Fornicons name="chevron-forward" size={20} color="#4b5563" />
      </OptionButton>

      <OptionButton>
        <OptionText>Current Bets</OptionText>
        <Fornicons name="chevron-forward" size={20} color="#4b5563" />
      </OptionButton>

      <OptionButton>
        <OptionText>Casino Results</OptionText>
        <Fornicons name="chevron-forward" size={20} color="#4b5563" />
      </OptionButton>
    </OptionList>
        <OptionList>
          <OptionButton  onPress={() => {navigation.navigate('EditStackScreen');onClose();}}>
            <OptionText>Set Button Values</OptionText>
            <Fornicons name="chevron-forward" size={20} color="#4b5563" />
          </OptionButton>
        </OptionList>
        <ToggleRow>
      <ToggleItem onPress={() => setShowBalance(!showBalance)}>
        <ToggleText>Balance</ToggleText>
        <Ionicons
          name={showBalance ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={22}
          color="#0f172a"
          style={{ paddingRight: 0 }}
        />
      </ToggleItem>

      <ToggleItem onPress={() => setShowExposure(!showExposure)}>
        <ToggleText>Exposure</ToggleText>
        <Ionicons
          name={showExposure ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={22}
          color="#0f172a"
          style={{ paddingRight: 0,}}
        />
      </ToggleItem>
    </ToggleRow>
        <LogoutButton onPress={handleLogout}>
          <LogoutText>Log out</LogoutText>
        </LogoutButton>


<FooterContainer>
<SupportText>24x7 Support</SupportText>
        <SocialIcons>
  <SocialIcon source={require('../../assets/media-icon/facebook.png')} />
  <SocialIcon source={require('../../assets/media-icon/instagram.png')} />
  <SocialIcon source={require('../../assets/media-icon/telegram.png')} />
  <SocialIcon source={require('../../assets/media-icon/twitter.png')} />
</SocialIcons>
<SecureBox>
      <SecureImage source={require('../../assets/media-icon/ssl.png')} />
      <TextContainer>
        <TitleText>100% SAFE</TitleText>
        <SubtitleText>Protected connection and encrypted data</SubtitleText>
      </TextContainer>
    </SecureBox>
      <IconRow>
        <IconImage source={require('../../assets/media-icon/18plus.png')} />
        <IconImage source={require('../../assets/media-icon/gamecare.png')} />
        <IconImage source={require('../../assets/media-icon/gt.png')} />
      </IconRow>
      <CopyRight>
@Copyright 2025. All Right Reserved.
      </CopyRight>
    </FooterContainer>
      </ModalContainer>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)``;

const ModalContainer = styled.View`
  background-color: #fff;
  padding: 8px 8px;
  
  border-radius: 4px;
  max-height: 95%;
  margin:16px;

`;

const DragBar = styled.View`
  width: 30px;
  height: 1.5px;
  background-color: #ccc;
  border-radius: 3px;
  align-self: center;
  margin-bottom: 15px;
`;

const SectionTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const OptionList = styled.View`
  margin:3px 0;
   background-color: #f1f5f9;
  border-bottom-width: 0.3px;
  border-color: #e5e7eb;
  border-radius:8px;
`;

const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background-color: #f1f5f9;
  border-radius: 10px;
`;
const OptionText = styled.Text`
  font-size: 12px;
  color: #1f2937;
`;
const ToggleRow = styled.View`
  flex-direction: column;
  margin: 12px 0;
`;

const ToggleItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ToggleText = styled.Text`
  font-size: 12px;
  color: #1f2937;
`;
const LogoutButton = styled.TouchableOpacity`
  background-color: #f1f5f9;
  padding: 12px;
  align-items: center;
  border-radius: 8px;
  margin-vertical: 8px;
`;

const LogoutText = styled.Text`
  font-weight: bold;
  latter-spacing:0.5;
  color:#000;
`;

const SupportText = styled.Text`
  text-align: center;
  margin-top: 10px;
  color:#000;
  font-weight: 700;
`;

const SocialIcons = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

const SocialIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin: 0 6px;
`;
const FooterContainer = styled.View`
  align-items: center;
`;

const IconRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const IconImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  resize-mode: contain;
`;
const CopyRight = styled.Text`
color :#000;
text-align:center;
font-size:10px;
font-weight:300;
margin:0px;
`;
const SecureBox = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
padding: 8px 0px;
`;


const TextContainer = styled.View``;

const TitleText = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #0f172a;
`;

const SubtitleText = styled.Text`
  font-size: 10px;
  color: #334155;
`
 const SecureImage = styled.Image`
width: 52px;
  height: 26px;
  margin: 0 8px;

`;
export default UsemenuModal;
