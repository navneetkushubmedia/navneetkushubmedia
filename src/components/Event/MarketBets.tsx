import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MarketBets = ({ bets = [] }) => {
  const hasBets = 1;

  return (
    <Container>
      {/* if Data Get and Show Data */}
      {/* <TableHeader>
        <HeaderText>Matched Bet</HeaderText>
        <HeaderText>Odds</HeaderText>
        <HeaderText>Stake</HeaderText>
      </TableHeader>
          <TableRow>
            <CellText>0</CellText>
            <CellText>0</CellText>
            <CellText>0</CellText>
          </TableRow> */}



           {/* If No data this content View */}
      
        <NodataConatiner>
          <TopIconWrapper>
            <Icon name="reader-outline" size={60} color="rgba(148, 163, 177, 0.91);" />
          </TopIconWrapper>

          <EmptyStateWrapper>
 <NodataText>No Data</NodataText>
            <EmptyText>You don't have any bet.</EmptyText>
          </EmptyStateWrapper>
        </NodataConatiner>
     
    </Container>
  );
};

export default MarketBets;
const Container = styled.View`
  justify-content: space-between;
  
`;

const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
   background-color: #2c3e50e8;
`;

const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  background-color: rgba(249, 247, 247, 0.96);
`;

const HeaderText = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  color: #fff;
`;

const CellText = styled.Text`
  flex: 1;
  font-size: 13px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

const EmptyStateWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TopIconWrapper = styled.View`
  align-items: center;
  background-color:transparent;
  padding-top: 12px;
`;

const EmptyText = styled.Text`
  font-size: 14px;
  color:rgba(148, 163, 177, 0.91);
  font-weight: bold;

`;

const NodataText = styled.Text`
  font-size: 15px;
  color:#5e7994fa;
  font-weight: bold;
  margin: 8px 0px;
`;
const NodataConatiner = styled.View`
justfiy-content: center;
margin-top:42%;
`;
