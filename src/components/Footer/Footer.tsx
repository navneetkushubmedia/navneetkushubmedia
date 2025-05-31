import React from 'react';
import styled from 'styled-components/native';

const FooterContainer = styled.View`
  height: 60px;
  background-color: #009ffd;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.Text`
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 D247</FooterText>
    </FooterContainer>
  );
};

export default Footer;
