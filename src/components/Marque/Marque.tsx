// components/MarqueeText.tsx
import React from 'react';
import TextTicker from 'react-native-text-ticker';
import styled from 'styled-components/native';
import Theme from '../../constants/Theme';
const StyledTicker = styled(TextTicker)`
 font-size: 14px;
  latter-spacing:0.5;
  font-family: '${({ theme }) => Theme.textStyles.bodyfontsnew}';
  color: ${({ theme }) => Theme.colors.white};
  padding-horizontal: 10px;
`;
const MarqueeWrapper = styled.View`
  height: 30px;
   background-color:${({ theme }) => Theme.colors.backmarque};
  justify-content: center;
  overflow: hidden;
`;

type MarqueeTextProps = {
  text: string;
};

const MarqueeText: React.FC<MarqueeTextProps> = ({ text }) => {
  if (!text) return null;

  return (
    <MarqueeWrapper>
    <StyledTicker
      duration={17000}
      loop
      bounce={false}
      repeatSpacer={50}
      marqueeDelay={1000}
    >
      {text}
    </StyledTicker>
    </MarqueeWrapper>

  );
};

export default MarqueeText;
