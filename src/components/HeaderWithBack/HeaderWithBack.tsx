import React from 'react';
import styled from 'styled-components/native';
import  Icon from "react-native-vector-icons/Ionicons";
const HeaderContainer = styled.View`
  height: 45px;
  background-color: #2b3e51;
  flex-direction: row;
  align-items: center;
  padding: 0 4px;
`;

const BackButton = styled.TouchableOpacity`
  padding: 4px;
`;
const BackText = styled.Text`
  padding: 0px;
  color: white;
  fontSize: 14;
  marginLeft: 0;
  fontWeight: bold;
`;



type HeaderWithBackProps = {
  onBack: () => void;
  title?: string;
};

const HeaderWithBack: React.FC<HeaderWithBackProps> = ({ onBack, title }) => (
  <HeaderContainer>
    <BackButton onPress={onBack}>
<Icon name ="chevron-back" size={20} color="#fff"/>
    </BackButton>
    {title && (
      <BackText onPress={onBack}>
        {title}
      </BackText>
    )}
  </HeaderContainer>
);

export default HeaderWithBack;
