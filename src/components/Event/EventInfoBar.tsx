import React, { useState } from 'react';
import styled from 'styled-components/native';
import Theme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const Container = styled.View`
  background-color: ${({ theme }) => Theme.colors.inactiveTabBackground};
  padding: 8px 12px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftTextGroup = styled.View``;

const StyledText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const IframeWrapper = styled.View`
 background-color: ${({ theme }) => Theme.colors.inactiveTabBackground};
  height: 240px;
  overflow: hidden;
`;

const EventInfoBar = () => {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(prev => !prev);
  };

  return (
    <View>
      <Container>
        <Row>
          <LeftTextGroup>
            <StyledText>
              International Twenty20 Matches {'>'} UAE v Bangladesh
            </StyledText>
            <StyledText>19/05/2025 20:30:00</StyledText>
          </LeftTextGroup>
          <Icon name="live-tv" size={20} color="white" onPress={toggleIframe} />
        </Row>
      </Container>

      {showIframe && (
        <IframeWrapper>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/O2h1qSmMxk4' }}
            style={{ flex: 1 }}
            allowsInlineMediaPlayback
            javaScriptEnabled
          />
        </IframeWrapper>
      )}
    </View>
  );
};

export default EventInfoBar;
