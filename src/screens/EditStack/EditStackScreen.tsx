import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Header from '../../components/Header/Header';
import HeaderWithBack from '../../components/HeaderWithBack/HeaderWithBack';
import { useNavigation } from '@react-navigation/native';

const defaultPriceData = [
  { label: '1k', value: '1000' },
  { label: '2k', value: '2000' },
  { label: '5k', value: '5000' },
  { label: '10k', value: '10000' },
  { label: '20k', value: '20000' },
  { label: '25k', value: '25000' },
  { label: '50k', value: '50000' },
  { label: '75k', value: '75000' },
  { label: '90k', value: '90000' },
  { label: '95k', value: '95000' },
];

const defaultCasinoData = [
  { label: '25', value: '25' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
  { label: '200', value: '200' },
  { label: '500', value: '500' },
  { label: '1000', value: '1000' },
];

const EditStackScreen = ({
  onClose,
}: {
  onClose: (updated: { game: any[]; casino: any[] }) => void;
}) => {
  const [activeTab, setActiveTab] = useState<'game' | 'casino'>('game');
  const [gamePrices, setGamePrices] = useState(defaultPriceData);
  const [casinoPrices, setCasinoPrices] = useState(defaultCasinoData);
  const navigation = useNavigation();

  const getActivePrices = () => (activeTab === 'game' ? gamePrices : casinoPrices);
  const setActivePrices = (updated: any[]) =>
    activeTab === 'game' ? setGamePrices(updated) : setCasinoPrices(updated);

  const handleChange = (
    index: number,
    field: 'label' | 'value',
    text: string
  ) => {
    const updated = [...getActivePrices()];
    updated[index][field] = text;
    setActivePrices(updated);
  };

  const handleSubmit = () => {
    onClose({
      game: gamePrices,
      casino: casinoPrices,
    });
  };

  return (
    <Container>
      <Header />
      <HeaderWithBack onBack={() => navigation.goBack()} title="Set Button Values" />
      <TabContainer>
        <TabButton active={activeTab === 'game'} onPress={() => setActiveTab('game')}>
          <TabText>Game Buttons</TabText>
        </TabButton>
        <TabButton active={activeTab === 'casino'} onPress={() => setActiveTab('casino')}>
          <TabText>Casino Buttons</TabText>
        </TabButton>
      </TabContainer>
      <ScrollView keyboardShouldPersistTaps="handled">
  <TableBorder>
    <LabelGroup>
      <FieldBox><FieldLabel>Price Label</FieldLabel></FieldBox>
      <Divider />
      <FieldBox><FieldLabel>Price Value</FieldLabel></FieldBox>
    </LabelGroup>
    <Table>
      {getActivePrices().map((item, index) => (
        <TableRow key={`${activeTab}-${index}`}>
          <InputGroup>
            <LabelInput
              value={item.label}
              onChangeText={(text) => handleChange(index, 'label', text)}
              keyboardType="default"
            />
          </InputGroup>
          <InputGroup>
            <ValueInput
              value={item.value}
              onChangeText={(text) => handleChange(index, 'value', text)}
              keyboardType="numeric"
            />
          </InputGroup>
        </TableRow>
      ))}
    </Table>
  </TableBorder>
  <SubmitButton onPress={handleSubmit}>
    <SubmitText>Submit</SubmitText>
  </SubmitButton>
</ScrollView>

    </Container>
  );
};

export default EditStackScreen;

const Container = styled.View`
flex: 1; 
background-color: #ffffff;`;
const TabContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin:  8px 8px;
border-width: 1px;
 border-color: #d1d5db;
 width:233px;
`;

const TabButton = styled.TouchableOpacity<{ active: boolean; isFirst?: boolean;}>`

  padding: 6px;
  background-color: ${({ active }) => (active ? '#ffffff' : '#e5e7eb')};
  align-items: center;
  
`;


const TabText = styled.Text`
font-weight: bold; 
color: #111827;
`;
const Table = styled.View`
 margin:1px 2px;
`;
const TableRow = styled.View`
flex-direction: row;
 margin-bottom: 4px;
 `;
 const LabelInput = styled.TextInput`
 flex: 1;
 height: 36px; /* Fixed height */
 border-width: 1px;
 border-color:rgba(209, 213, 219, 0.71); 
 border-radius: 4px;
 padding: 0px 10px;
 margin: 0px 8px;
 margin-left:1px;
 margin-top:0px;
 margin-top:4px;
`;

const ValueInput = styled.TextInput`
 flex: 1;
 height: 36px; /* Fixed height */
 border-width: 1px;
 border-color:rgba(209, 213, 219, 0.71); 
 border-radius: 4px;
 padding: 0 10px; /* Match label input padding */
 margin: 0px 8px;
 margin-right:1px;
 margin-top:0px;
 margin-top:4px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #0284c7;
   padding: 6px; 
   align-items: center;
  justify-content: center; 
  margin: 13px 8px; 
  
  border-radius: 4px;
`;
const SubmitText = styled.Text`
  color: #ffffff; 
  font-weight: bold; 
  font-size: 15px;
  letter-spacing:1;
`;
const InputGroup = styled.View`
  flex: 1;
  border-top-width: 1px; 
 border-color: #d1d5db;
 padding:0px;
 margin:0px;
`;

const FieldLabel = styled.Text`
  font-size: 14px;
  margin: 2px 4px;
  color: #000;
  font-weight:bold;
`;
const FieldBox = styled.View`
background-color:#f1f5f8;
padding:4px;
width: 49.8%
`;
const LabelGroup = styled.View`
flex-direction: row;
`;
const TableBorder = styled.View`
  border-width: 1px;
  border-color: #d1d5db;
  margin: 0px 8px;
  border-radius: 2px;
  min-height: 160px; /* optional: prevents content jump on tab switch */
`;

const Divider =styled.View`
width:0.5px;
background-color:#000;
height:100%;
`;