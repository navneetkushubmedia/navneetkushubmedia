import React, { useState } from 'react';
import { ScrollView,} from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../constants/Theme';
import Sports from '../AllGameContent/Sports/Sports';
const sports = [
  { id: 4, name: 'Cricket', icon: 'sports-cricket' },
  { id: 1, name: 'Football', icon: 'sports-soccer' },
  { id: 2, name: 'Tennis', icon: 'sports-tennis' },
  { id: 68, name: 'Esoccer', icon: 'sports-esports' },
  { id: 10, name: 'Horse Racing', icon: 'emoji-nature' },
  { id: 65, name: 'Greyhound Racing', icon: 'pets' },
  { id: 8, name: 'Table Tennis', icon: 'sports-tennis' },
  { id: 15, name: 'Basketball', icon: 'sports-basketball' },
  { id: 6, name: 'Boxing', icon: 'sports-mma' },
  { id: 3, name: 'Mixed Martial Arts', icon: 'sports-kabaddi' },
  { id: 58, name: 'American Football', icon: 'sports-football' },
  { id: 18, name: 'Volleyball', icon: 'sports-volleyball' },
  { id: 22, name: 'Badminton', icon: 'sports-tennis' },
  { id: 59, name: 'Snooker', icon: 'casino' },
  { id: 19, name: 'Ice Hockey', icon: 'ac-unit' },
  { id: 11, name: 'E Games', icon: 'sports-esports' },
  { id: 40, name: 'Politics', icon: 'gavel' },
  { id: 9, name: 'Futsal', icon: 'sports-soccer' },
  { id: 39, name: 'Handball', icon: 'sports-handball' },
  { id: 52, name: 'Motor Sports', icon: 'emoji-transportation' },
  { id: 66, name: 'Kabaddi', icon: 'sports-kabaddi' },
];

const SportsTabBar = () => {
  const [activeTab, setActiveTab] = useState('Cricket');

  return (
<SportsContainer>
    <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
      {sports.map((sport) => (
        <TabButton
          key={sport.id}
          active={activeTab === sport.name}
          onPress={() => setActiveTab(sport.name)}
        >
          <MaterialIcons
            name={sport.icon}
            size={16}
            color={activeTab === sport.name ? Theme.colors.white : Theme.colors.white}
            style={{ marginBottom: 2 }}
          />
          <TabText active={activeTab === sport.name}>{sport.name}</TabText>
        </TabButton>
      ))}
      
    </ScrollContainer>
    
    {activeTab === 'Cricket' && <Sports />}
    
    </SportsContainer>
  );
};

export default SportsTabBar;
const SportsContainer = styled.View`
 
`;
const ScrollContainer = styled.ScrollView`
 background-color:'${Theme.colors.backGround}'; 
`;

const TabButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
padding: 3px 10px;
 background-color: ${(props) => (props.active ? Theme.colors.activeTabBackground : Theme.colors.inactiveTabBackground)};
`;


const TabText = styled.Text`
  font-family: '${Theme.textStyles.bodyfontsnew}';
  font-size: 12px;

  font-weight: bold;
  letter-spacing: 0.8px;
  color: ${(props) => (props.active ? '#fff' : '#fff')};
`;
