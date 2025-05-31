import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import Theme from '../../constants/Theme';

const TabBar = ({ selectedTab, onTabChange }) => {
  return (
    <TabWrapper>
      <Tab active={selectedTab === 'Odds'} onPress={() => onTabChange('Odds')}>
        <TabText active={selectedTab === 'Odds'}>Odds</TabText>
      </Tab>
      <Divider />
      <Tab active={selectedTab === 'Bets'} onPress={() => onTabChange('Bets')}>
        <TabText active={selectedTab === 'Bets'}> Matched Bets (0)</TabText>
      </Tab>
    </TabWrapper>
  );
};

export default TabBar;
const Divider = styled.View`
  width: 1px;
  background-color: #ccc;
  margin-vertical: 10px;
`;
const Tab = styled.TouchableOpacity`
padding: 10px 20px;
border-top-width: 2px;
border-top-color: ${({ active }) => (active ? '#fff' : 'transparent')};
`;
const TabWrapper = styled.View`
  flex-direction: row;
background-color: ${({ theme }) => Theme.colors.backGround};
`;
const TabText = styled.Text`
  color: ${({ active }) => (active ? '#fff' : '#fff')};
  font-weight: ${({ active }) => (active ? 'bold' : 'bold')};
`;
