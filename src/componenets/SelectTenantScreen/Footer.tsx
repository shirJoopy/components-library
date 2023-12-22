import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  in-height: 20px;
  background-color: #aecfde;
  margin: -30px auto 0;
  min-width: 1000px;
  height: 30px;
  position: relative;
`;

const FooterContainer = styled.div`
  min-width: 960px;
  padding: 0 10px;
  margin: 0 auto;
`;

const FooterText = styled.div`
  font: 10px/30px Arial, sans-serif;
  text-align: center;
  color: #696969;
`;

const Footer: React.FC = () => (
  <FooterWrapper className="footer">
    <FooterContainer className="container">
      <FooterText className="footer_text_block">
        <p className="copyrights" title="All rights reserved to Incentives-Solutions - a leading provider of compensation management systems, incentive compensation management software, and performance management consulting">
          All rights reserved to Incentives-Solutions - a leading provider of compensation management systems, incentive compensation management software, and performance management consulting
          {"   "} <span style={{ display: 'inline-block' }} className="app_version" title="(Version 9.69)">   (Version 9.69)</span>
        </p>
      </FooterText>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
