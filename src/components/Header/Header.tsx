import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Modal, TouchableWithoutFeedback, useColorScheme, AppState } from 'react-native';
//import MarqueText from './MarqueText';
import Theme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons'
import UsemenuModal from './UsemenuModal';
import LoginModal from './LoginModal';
import ExposureModal from './ExposureModal';
import MarqueeText from '../Marque/Marque';
const Header = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const [LoginVisible, setLoginVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isExpoModalVisible, setExpoModalVisible] = useState(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [showExposure, setShowExposure] = useState(true);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        // App minimize / background - hide overlay color
        setOverlayVisible(false);
      } else if (nextAppState === 'active') {
        // App back to foreground - show overlay color
        setOverlayVisible(true);
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <HeaderContainer>
      <TopRow>
        <LogoWrapper>
          <LogoImage source={require('../../assets/logo/logo.png')} />
        </LogoWrapper>
        {!LoginVisible && (
        <ButtonGroup
          style={{
            borderColor: isDark ? Theme.colors.black : Theme.colors.white,
          }}
        >
          <DemoButton
            style={{
              backgroundColor: isDark ? Theme.colors.black : Theme.colors.white,
            }}
            onPress={() => {
              setModalVisible(true);
              setLoginVisible(true);
              setOverlayVisible(true); // jab modal khole tab overlay dikhaye
            }}
          >
            <DemoText>Demo</DemoText>
          </DemoButton>
          <LoginButton onPress={() => setLoginModalVisible(true)} >
            <LoginText>Login</LoginText>
          </LoginButton>
        </ButtonGroup>
        )}
        {LoginVisible && (
        <BottomBar>
         {showBalance && ( <Divpading>
        <BalanceText>Balance:<BalanceNumber>1500</BalanceNumber></BalanceText>
        </Divpading>)}
        <ButtonRow>
          <BottomButton onPress={() => setExpoModalVisible(true)}>
          {showExposure && (<Divpading>
            <ExposureButtonText>Exposer: <BalanceNumber>0</BalanceNumber></ExposureButtonText>
            </Divpading>)}
          </BottomButton>
          <BottomButton onPress={() => setVisible(true)}>
  <Divpading>
    <UserRow>
      <UserButtonText>Demo</UserButtonText>
      <Icon name="arrow-drop-down" size={20} color="#fff"  />
    </UserRow>
  </Divpading>
</BottomButton>
        </ButtonRow>
      </BottomBar>
      
      )}
      </TopRow>

      <MarqueeWrapper>
        <MarqueeText text='The IPL 2025 season is on! Scratch your way to big rewards and jaw-dropping surprises! 🏏💸🥳' />
      </MarqueeWrapper>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <ModalOverlay style={{ backgroundColor: overlayVisible ? 'rgba(0, 0, 0, 0.7)' : 'transparent' }}>
            <ModalBox>
              <DemoImage
                source={require('../../assets/images/welcome-banner.png')}
                resizeMode="cover"
              />
            </ModalBox>
          </ModalOverlay>
        </TouchableWithoutFeedback>
      </Modal>
      <UsemenuModal
  isVisible={visible}
  onClose={() => setVisible(false)}
  showBalance={showBalance}
  setShowBalance={setShowBalance}
  showExposure={showExposure}
  setShowExposure={setShowExposure}
/>
        <LoginModal isVisible={isLoginModalVisible} onClose={() => setLoginModalVisible(false)} />
        <ExposureModal isVisible={isExpoModalVisible} onClose={() => setExpoModalVisible(false)} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  background-color: ${({ theme }) => Theme.colors.backGround};
  padding: 8px 6px;
  padding-bottom: 0px;
  elevation: 4;
`;

const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LogoWrapper = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const LogoImage = styled.Image`
  width: 100px;
  height: 35px;
  resize-mode: contain;
  margin-left: -5px;
`;

const ButtonGroup = styled.View`
  flex-direction: row;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => Theme.colors.white};
  overflow: hidden;
`;

const DemoButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => Theme.colors.white};
  padding: 10px 16px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 10px 16px;
`;

const DemoText = styled.Text`
  color: ${({ theme }) => Theme.colors.texttheme};
  font-weight: bold;
  font-size: 11px;
`;

const LoginText = styled.Text`
  color: ${({ theme }) => Theme.colors.white};
  font-size: 11px;
  font-weight: bold;
`;

const MarqueeWrapper = styled.View`
  margin-top: 8px;
`;

const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.View`
  width: 88.86%;
  height: 79.1%;
  background-color: white;
  border-radius: 4px;
  align-items: center;
  overflow: hidden;
`;

const DemoImage = styled.Image`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
const BottomBar = styled.View`
  position: absolute;
   /* Adjust vertical position as needed */
  right: 0px;  /* Right align */
  width: auto;
  align-items: flex-end; /* Align children to the right */
`;

const BalanceText = styled.Text`
  font-weight: 500;
  font-size: 12px;
 
  color: ${({ theme }) => Theme.colors.white};

`;

const  BalanceNumber = styled.Text`
 font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => Theme.colors.white};
 
`;
const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: auto;
`;

const BottomButton = styled.TouchableOpacity`
  margin-left: 2px; /* space between buttons */
 justify-content: center; /* ✅ Center content vertically */
  align-items: center;
`;
const ExposureButtonText= styled.Text`
 align-content: center;
 font-weight: 600;
 font-size:12px;
  color: ${({ theme }) => Theme.colors.white};
`;
const UserButtonText = styled.Text`
 
  font-weight: bold;
  font-size:14px;
   color: ${({ theme }) => Theme.colors.white};
`;
const Divpading = styled.View`
background-color:${({ theme }) => Theme.colors.backmarque};
padding:0px 4px;
margin:1px 0px;
border-radius:2px;
`;
const UserRow = styled.View`
  flex-direction: row;
  padding-left:3px;
  align-items: center;
`;
export default Header;
