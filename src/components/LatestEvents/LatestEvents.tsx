import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Scon from 'react-native-vector-icons/Ionicons';
import Theme from '../../constants/Theme';
import { useNavigation } from '@react-navigation/native';

export default function LatestEvents() {

  const navigation = useNavigation();
  return (
    <LatestEventWrapper>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Each Event */}
        <LatestEventItem>
          <EventLink onPress={() => navigation.navigate('EventScreen')}>
          <StyledIcon name="sports-cricket" size={16} color="#fff" />
            <EventText>Indian Premier League</EventText>
          </EventLink>
        </LatestEventItem>
        <LatestEventItem>
          <EventLink onPress={() => alert('Navigating to Game 2')}>
          <BallIcon name="football" size={16} color="#fff" />
            <EventText>Paul v Machac</EventText>
          </EventLink>
        </LatestEventItem>
        <LatestEventItem>
          <EventLink onPress={() => alert('Navigating to Game 3')}>
          <BallIcon name="football" size={16} color="#fff" />
            <EventText>Pe Stearns v N Osaka</EventText>
          </EventLink>
        </LatestEventItem>
        <LatestEventItem>
          <EventLink onPress={() => alert('Navigating to Game 4')}>
          <BallIcon name="tennisball" size={16} color="#fff" />
            <EventText>Dellien v Alex de Minaur</EventText>
          </EventLink>
        </LatestEventItem>
        <LatestEventItem>
          <EventLink onPress={() => alert('Navigating to Game 5')}>
          <BallIcon name="tennisball" size={16} color="#fff" />
            <EventText>Giron v Hurkacz</EventText>
          </EventLink>
        </LatestEventItem>
      </ScrollView>
    </LatestEventWrapper>
  );

}
// Wrapper with background color
const LatestEventWrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 1px;
  background-color: #0088cc;
`;
const StyledIcon = styled(Icon)`
  padding: 6px;
`;
const BallIcon = styled(Scon)`
  padding: 6px;
`;
// Each item container
const LatestEventItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 6px 0px;
  background-color:rgb(67, 79, 91); 
  padding: 8px; 
   margin:6px;
   border-radius:4px;
`;


// Touchable link for each event
const EventLink = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

// Event text styling
const EventText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;

