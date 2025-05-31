import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../routers/AuthNavigator';
import Header from '../../components/Header/Header';
import LatestEvents from '../../components/LatestEvents/LatestEvents';
import Footer from '../../components/Footer/Footer';

import AllGameSlides from '../../components/allgameSlides/AllGameSlides';
interface LoginScreenProps {
  navigation: StackNavigationProp<AuthStackParamList, 'HomeScreen'>;
}

const HomeScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <LayoutContainer>
      <Header />
      {/* <LatestEvents /> */}
      <AllGameSlides />
      {/* <Footer/> */}
    </LayoutContainer>
  );
};


const LayoutContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const MainContent = styled.View`
  flex: 1;
  padding-bottom: 60px;
`;
// Styled Components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #f7f8fa;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: #666;
  margin-bottom: 32px;
`;

const Button = styled.TouchableOpacity`
  background-color: #3478f6;
  padding: 12px 24px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
export default HomeScreen;