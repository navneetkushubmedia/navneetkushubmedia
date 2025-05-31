import React, { useRef, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';
import Theme from '../../constants/Theme';
import SportsTabBar from './SportsTabBar';
import LatestEvents from '../LatestEvents/LatestEvents';

export default function AllGameSlides() {
  const tabs = [
    { title: 'Sports', path: '/home' },
    { title: 'Our Casino', path: '/casino-list' },
    { title: 'Live Casino', path: '/live-casino-list' },
    { title: 'Slots', path: '/slot-list' },
    { title: 'Fantasy', path: '/fantasy-list' },
  ];

  const [activeTab, setActiveTab] = useState('Sports');
  const scrollRef = useRef(null);
  const tabRefs = useRef([]);

  const handleTabPress = (tabTitle, index) => {
    setActiveTab(tabTitle);

    tabRefs.current[index]?.measureLayout(
      scrollRef.current.getInnerViewNode(),
      (x) => {
        scrollRef.current.scrollTo({ x: x - 20, animated: true });
      },
      (error) => {
        console.warn('Tab measure error:', error);
      }
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Sports':
        return <SportsTabBar/>;
      case 'Our Casino':
        return <Text>Our Casino content goes here.</Text>;
      case 'Live Casino':
        return <Text>Live Casino content goes here.</Text>;
      case 'Slots':
        return <Text>Slots content goes here.</Text>;
      case 'Fantasy':
        return <Text>Fantasy content goes here.</Text>;
      default:
        return <Text>Select a tab to see content.</Text>;
    }
  };

  return (
    <>
   
    <LatestEvents/>
      <TabNav>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.title;
            return (
              <View
                key={index}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                ref={(ref) => (tabRefs.current[index] = ref)}
                collapsable={false}
              >
                <TabItem onPress={() => handleTabPress(tab.title, index)}>
                  <TabTextWrapper
                    style={{
                      borderTopWidth: isActive ? 3 : 0,
                      borderTopColor: isActive ? '#fff' : 'transparent',
                    }}
                  >
                    <TabText>{tab.title}</TabText>
                  </TabTextWrapper>
                </TabItem>
                {index < tabs.length - 1 && <Divider />}
              </View>
            );
          })}
        </ScrollView>
      </TabNav>
      {/* Content Area Below */}
      <TabContent>{renderContent()}</TabContent>
    </>
  );
}
const TabNav = styled.View`
  background-color:${({ theme }) => Theme.colors.bgback};
`;

const TabItem = styled(TouchableOpacity)`
  padding-horizontal: 14px;
  
`;
const ContentScroll = styled.ScrollView`
  flex: 1;
`;
const TabTextWrapper = styled.View`
  align-self: center;
`;

const TabText = styled.Text`
  color: #fff;
  padding: 8px;

  font-size: 12px;
  font-weight: bold;
`;

const Divider = styled.View`
  width: 0.5px;
  height: 50%;
  background-color: #fff;
  margin-horizontal: 6px;
  align-self: center;
`;

const TabContent = styled.View`

`;

