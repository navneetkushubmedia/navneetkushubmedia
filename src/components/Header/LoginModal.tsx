import React,{useState} from 'react';
import {TouchableOpacity, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Theme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FloatingLabelInput from './FloatingLabeLInput';
const { height } = Dimensions.get('window');

const LoginModal = ({ isVisible, onClose }) => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
const [passwordError, setPasswordError] = useState('');
const handleLogin = () => {
    if (!username.trim()) {
      setUsernameError('Please enter your username');
      return; // Stop here – don't validate password yet
    } else {
      setUsernameError('');
    }
  
    if (!password.trim()) {
      setPasswordError('Please enter your password');
      return;
    } else {
      setPasswordError('');
    }
  
    // Both fields are valid – proceed to login
  };
  
  
  return (
    <StyledModal
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
    >
      
      <StyledScrollView
  contentContainerStyle={{ flexGrow: 1 }}
  keyboardShouldPersistTaps="handled"
>
  <Container>
    <Title>
      LogIn <Icon name="hand-point-down" size={16} color={Theme.colors.backGround} />
    </Title>

    <FloatingLabelInput
  label="Username"
  value={username}
  onChangeText={(text) => {
    setUsername(text);
    setUsernameError('');
  }}
  isError={!!usernameError}
  errorMessage={usernameError}
/>

<FloatingLabelInput
  label="Password"
  value={password}
  secureTextEntry
  onChangeText={(text) => {
    setPassword(text);
    setPasswordError('');
  }}
  isError={!!passwordError}
  errorMessage={passwordError}
/>


    <LoginButton onPress={handleLogin}>
      <LoginText>LOGIN</LoginText>
    </LoginButton>

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
      <CopyRight>@Copyright 2025. All Right Reserved.</CopyRight>
    </FooterContainer>

    <SupportSection>
      <Version>v1.32</Version>
    </SupportSection>
  </Container>
</StyledScrollView>

    </StyledModal>
  );
};

export default LoginModal;

// Styled Components
const StyledModal = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

const Container = styled.View`
  background-color: #f0f6f9;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 20px;
  max-height: 65%;
  //padding-bottom: 40px;
`;
const StyledScrollView = styled.ScrollView`
  background-color: #f0f6f9;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  max-height: 65%; /* Controls how far it extends up */
`;
const InputWrapper = styled.View`
  border-width: 1px;
  border-color: ${({ isError }) => (isError ? 'red' : 'transparent')};
  border-radius: 6px;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-bottom: 6px;
  margin-left: 4px;
`;


const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  letter-spacing:0.5;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => Theme.colors.backGround};
`;


const LoginButton = styled(TouchableOpacity)`
  background-color:${({ theme }) => Theme.colors.backGround};;
  padding: 14px;
  border-radius: 6px;
  align-items: center;
  margin-top: 6px;
`;

const LoginText = styled(Text)`
  color: #fff;
  letter-spacing:0.5;
  font-weight: bold;
`;

const SupportSection = styled.View`
  align-items: center;
`;



const Version = styled.Text`
  font-size: 12px;
  color: #000;
  font-weight:bold;
  margin-top: 5px;
`;
const SupportText = styled.Text`
  text-align: center;
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
  background-color:#fff;
  margin:12px 0px;
  padding:8px;
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
  letter-spacing: 0;
`
 const SecureImage = styled.Image`
width: 52px;
  height: 26px;
  margin: 0 8px;

`;
