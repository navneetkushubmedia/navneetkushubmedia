import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Platform } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/Header';
import HeaderWithBack from '../../components/HeaderWithBack/HeaderWithBack';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Theme from '../../constants/Theme';
const data = [
  { date: '19/05/2025', srNo: '1', credit: '-', debit: '-' , points:'0', remark:'Opening Pts' },
  { date: '26/05/2025 16:20:27', srNo: '2', credit: '1,500', debit: '-',  points:'1500', remark:'User creation' },
  
];

const AccountStatementScreen = ({ navigation }) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [pickerType, setPickerType] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [dropdownVisible, setDropdownVisible] = useState(false);
const [selectedOption, setSelectedOption] = useState('All');
const dropdownOptions = ['All', 'Deposit/Withdarw Report', 'Game Report'];
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);

  const showDatePicker = (type) => {
    console.log('Opening Date Picker for:', type);
    setPickerType(type);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString('en-GB'); // e.g., '27/05/2025'
    if (pickerType === 'from') {
      setFromDate(formattedDate);
    } else {
      setToDate(formattedDate);
    }
    hideDatePicker();
  };
  

  return (
    <Container>
      <Header />
      <HeaderWithBack onBack={() => navigation.goBack()} title="Account Statement" />

      <Form>
      <DateRow>
  <TouchableOpacity onPress={() => showDatePicker('from')} style={{ flex: 0.48 }}>
    <DateInputWrapper>
      <DateInput
        placeholder="From Date"
        value={fromDate || ''}
        editable={false}
        pointerEvents="none"
      />
      <Icon name="calendar-today" size={16} color="#000" />
    </DateInputWrapper>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => showDatePicker('to')} style={{ flex: 0.48 }}>
    <DateInputWrapper>
      <DateInput
        placeholder="To Date"
        value={toDate || ''}
        editable={false}
        pointerEvents="none"
      />
      <Icon name="calendar-today" size={16} color="#000" />
    </DateInputWrapper>
  </TouchableOpacity>
</DateRow>
<DropdownWrapper>
  <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
    <Dropdown>
      <DropdownText>{selectedOption}</DropdownText>
      <Icon name="arrow-drop-down" size={20} color="#8e9396" />
    </Dropdown>
  </TouchableOpacity>

  {dropdownVisible && (
    <DropdownList>
      {dropdownOptions.map((option) => (
        <DropdownItem
          key={option}
          onPress={() => {
            setSelectedOption(option);
            setDropdownVisible(false);
          }}
        >
          <DropdownItemText>{option}</DropdownItemText>
        </DropdownItem>
      ))}
    </DropdownList>
  )}
</DropdownWrapper>


        <SubmitButton>
          <SubmitText>Submit</SubmitText>
        </SubmitButton>
      </Form>

      <SearchBar>
        <SearchInput placeholder="Search statement" selectionColor="#cbb1ac" cursorColor='#cbb1ac' placeholderTextColor="#888" />
        <Icon name="search" size={22} color="#606263" />
      </SearchBar>
      <TableContainer>
  <HorizontalScroll>
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <TableHeader>
          <TableHeaderText>Date</TableHeaderText>
          <TableHeaderSrNoText>SrNo</TableHeaderSrNoText>
          <TableHeaderText>Credit</TableHeaderText>
          <TableHeaderText>Debit</TableHeaderText>
          <TableHeaderText>Pts</TableHeaderText>
          <TableHeaderText>Remark</TableHeaderText>
        </TableHeader>
      }
      renderItem={({ item }) => (
        <TableRow>
          <CellDate>{item.date}</CellDate>
          <CellsrNo>{item.srNo}</CellsrNo>
          {item.credit !== '-' ? (
            <GreenText>{item.credit}</GreenText>
          ) : (
            <Cell>{item.credit}</Cell>
          )}
          <Cell>{item.debit}</Cell>
          <CellPoints>{item.points}</CellPoints>
          <CellRemark>{item.remark}</CellRemark>
        </TableRow>
      )}
    />
  </HorizontalScroll>
</TableContainer>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={today}
        textColor="red"
        minimumDate={oneMonthAgo}
        themeVariant={Platform.OS === 'ios' ? 'light' : 'dark'}
      />
    </Container>
  );
};

export default AccountStatementScreen;

// Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-bottom:16px;
`;

const Form = styled.View`
  padding: 10px 8px;
`;

const DateRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DateInput = styled.TextInput`
  color: #000;
  margin:0px;
  padding:0px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => Theme.colors.backGround};
  padding: 6px;
  margin-top:12px;
   margin-bottom:4px;
  border-radius: 5px;
  align-items: center;
`;

const SubmitText = styled.Text`
  color: white;
  font-weight: bold;
`;

 const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Push icon to the right */
  background-color: #e1e5e7;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0px 15px;
`;
 const SearchInput = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  color: #000;
`;


const DateInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  padding: 0px 8px;
  border-radius: 5px;
  justify-content: space-between;
`;
const DropdownWrapper = styled.View`
  position: relative;
  margin-top: 10px;
`;

const Dropdown = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 0.5px;
  border-color: #ccc;
  padding: 4px 8px;
  border-radius: 5px;
`;

const DropdownText = styled.Text`
  color: #000;
`;

const DropdownList = styled.View`
  
  background-color: #eeeeee;
  z-index: 999;
  position:absolute;
  top:-4px;
  width:100%;
  elevation: 3;
`;

const DropdownItem = styled.TouchableOpacity`
  padding: 5px;
`;

const DropdownItemText = styled.Text`
  color: #000;
`;
const TableContainer = styled.View`
 border-width: 0.5px;
  border-color: #ccc;
  
`;

const HorizontalScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

const TableHeader = styled.View`
  flex-direction: row;
  background-color: #f1f5f7;
  
`;

const TableHeaderText = styled.Text`
  width: 120px;
  font-weight: bold;
  color: #333;
  padding: 6px;
  font-size:12px;
  border-right-width: 0.5px;
  border-color: #ccc;
  text-align:center;
`;

const TableHeaderSrNoText = styled.Text`
  width: 60px;
  font-weight: bold;
  color: #333;
  padding: 6px;
  font-size:12px;
  border-right-width: 0.5px;
  border-color: #ccc;
  text-align:center;
`;
const TableRow = styled.View`
  flex-direction: row;
  border-top-width: 0.5px;
  border-color: #ccc;
  
`;

const Cell = styled.Text`
padding: 10px;
  border-right-width: 0.5px;
  border-color: #ccc;
  width: 120px;
  font-size:12px;
  color: #000;
  font-weight:bold;
  text-align:right;
`;
const CellDate = styled.Text`
padding: 10px;
  border-right-width: 0.5px;
  border-color: #ccc;
  width: 120px;
  font-size:12px;
  color: #000;
  text-align:left;
`;
const CellRemark = styled.Text`
padding: 10px;
  border-right-width: 0.5px;
  border-color: #ccc;
  width: 120px;
  font-size:12px;
  color: #000;
  text-align:left;
`;
const CellsrNo =styled.Text`
padding: 10px;
  border-right-width: 0.5px;
  border-color: #ccc;
  width: 60px;
  font-size:12px;
  color: #000;
  text-align:right;
`;
const CellPoints = styled.Text`
padding: 10px;
  border-right-width: 0.5px;
  border-color: #ccc;
  width: 120px;
  font-size:12px;
  color: #000;
  font-weight:bold;
  text-align:right;
`;

const GreenText = styled(Cell)`
  color:rgb(22, 164, 74);
`;
