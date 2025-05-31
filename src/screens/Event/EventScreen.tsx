import React,{useState} from 'react';
import {View, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import EventInfoBar from '../../components/Event/EventInfoBar';
import TabBar from '../../components/Event/TabBar';
import EventMarket from '../../components/Event/EventMarket';
import MarketBets from '../../components/Event/MarketBets';
import styled from 'styled-components';

const EventScreen = () => {
    const [selectedTab, setSelectedTab] = useState('Odds'); // default tab
  
    return (
      <EventContainer>
        <Header />
        
        <EventInfoBar />
  
        {/* Tab Switcher */}
        <TabBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
  
        <ScrollView>
          {selectedTab === 'Odds' && (
            <>
              <EventMarket
                cashout='0'
                title="MATCH_ODDS"
                messages="IPL And PSL 2025 Cup Winner Bets Started In Our Exchange. IPL And PSL 2025 Cup Winner Bets Started In Our Exchange"
                markets={[
                  {
                    name: 'United Arab Emirates',
                    back: '2.16',
                    backSub: '20.68',
                    lay: '4.6',
                    laySub: '36.15',
                    status:'open',
                   
                  },
                  {
                    name: 'Bangladesh',
                    back: '1.28',
                    backSub: '129.92',
                    lay: '1.29',
                    laySub: '36.47',
                    status:'open', 
                  },
                ]}
              />
              <EventMarket
                title="Bookmaker"
                 cashout='1'
                markets={[
                  {
                    name: 'United Arab Emirates',
                    back: '4.4',
                    backSub: '20.68',
                    lay: '4.6',
                    laySub: '36.15',
                   status:'suspended',
                  },
                  {
                    name: 'Bangladesh',
                    back: '1.28',
                    backSub: '129.92',
                    lay: '1.29',
                    laySub: '36.47',
                   status:'suspended',
                  },
                ]}
              />
              <EventMarket
                title="Win Toss"
                markets={[
                  {
                    name: 'United Arab Emirates',
                    back: '4.4',
                    backSub: '20.68',
                    lay: '4.6',
                    laySub: '36.15',
                    status:'suspended',
                  },
                  {
                    name: 'Bangladesh',
                    back: '1.28',
                    backSub: '129.92',
                    lay: '1.29',
                    laySub: '36.47',
                  },
                ]}
              />
              <EventMarket
                title="Tied Match"
                markets={[
                  {
                    name: 'United Arab Emirates',
                    back: '4.4',
                    backSub: '20.68',
                    lay: '4.6',
                    laySub: '36.15',
                    status:'suspended',
                  },
                  {
                    name: 'Bangladesh',
                    back: '1.28',
                    backSub: '129.92',
                    lay: '1.29',
                    laySub: '36.47',
                  },
                ]}
              />
              <EventMarket
                title="Normal"
                reverseColors
                markets={[
                  { name: '6 over runs UAE(UAE vs BAN)adv and 6 over runs', back: '43', lay: '45', backSub: '100', laySub: '100', min: '50', max: '5000',fancypermessages:'IPL And PSL 2025 Cup Winner Bets Started In Our Exchange. IPL And PSL 2025 Cup Winner Bets Started In Our Exchange' },
                  { name: '6 over runs BAN(UAE vs BAN)adv', back: '50', lay: '52', backSub: '100', laySub: '100' ,min: '50', max: '5000',status:'Ball Running'},
                  { name: 'Match 1st over run(UAE vs BAN)', back: '6', lay: '7', backSub: '100', laySub: '100',min: '50', max: '5000', },
                  { name: '20 over runs UAE(UAE vs BAN)', back: '148', lay: '151', backSub: '100', laySub: '100',min: '50', max: '5000',},
                  { name: '20 over runs BAN(UAE vs BAN)', back: '176', lay: '179', backSub: '100', laySub: '100',min: '50', max: '5000',status:'suspended' },
                  { name: 'Fall of 1st wkt UAE(UAE vs BAN)', back: '18', lay: '18', backSub: '120', laySub: '90',min: '50', max: '5000', status:'suspended'  },
                  { name: 'Fall of 1st wkt BAN(UAE vs BAN)', back: '24', lay: '24', backSub: '120', laySub: '90',min: '50', max: '5000', status:'Ball Running' , },
                ]}
                 messages="IPL And PSL 2025 Cup Winner Bets Started In Our Exchange. IPL And PSL 2025 Cup Winner Bets Started In Our Exchange"
              />

                            <EventMarket
                title="Over By Over"
                 
                 reverseColors
                markets={[
                  {
                    name: 'United Arab Emirates',
                    back: '4',
                    backSub: '',
                    lay: '4',
                    laySub: '',
                  
                  },
                  {
                    name: 'Bangladesh',
                    back: '5',
                    backSub: '',
                    lay: '5',
                    laySub: '',
                   status:'suspended',
                  },
                ]}
              />
                <EventMarket
                title="Oddeven"
                 
                 reverseColors
                markets={[
                  {
                    name: '10 Over Run Odd even SA E',
                    back: '4',
                    backSub: '',
                    lay: '4',
                    laySub: '',
                    status:'open',
                  },
                  {
                    name: '20 Over Run Odd even SA E',
                    back: '5',
                    backSub: '',
                    lay: '5',
                    laySub: '',
                   status:'open',
                  },
                  {
                    name: '30 Over Run Odd even SA E',
                    back: '5',
                    backSub: '',
                    lay: '5',
                    laySub: '',
                   status:'open',
                  },
                ]}
              />
              <EventMarket
                title="1ST INN 40 OVER BAN EVS SA E"
                numberSession="1"
                markets={[
                  { name: '0 Number', back: '9.5', lay: '', backSub: '100', laySub: '100', min: '50', max: '5000', status:'Suspended'},
                  { name: '1 Number', back: '9.2', lay: '', backSub: '100', laySub: '100' ,min: '50', max: '5000',},
                  { name: '2 Number', back: '1.5', lay: '', backSub: '100', laySub: '100',min: '50', max: '5000', },
                  { name: '3 Number', back: '3.4', lay: '', backSub: '100', laySub: '100',min: '50', max: '5000',},
                  { name: '4 Number', back: '1.5', lay: '', backSub: '100', laySub: '100',min: '50', max: '5000', status:'Suspended'},
                  { name: '5 Number', back: '2.1', lay: '', backSub: '120', laySub: '90',min: '50', max: '5000', },
                  { name: '6 Number', back: '9.0', lay: '', backSub: '120', laySub: '90',min: '50', max: '5000', },
                  { name: '7 Number', back: '3.4', lay: '', backSub: '100', laySub: '100',min: '50', max: '5000',},
                  { name: '8 Number', back: '1.5', lay: '', backSub: '100', laySub: '100',min: '50', max: '5000', },
                  { name: '9 Number', back: '2.1', lay: '', backSub: '120', laySub: '90',min: '50', max: '5000', },
                 
                ]}
              />
            </>
          )}
  
          {selectedTab === 'Bets' && (
            <MarketBets />
          )}
        </ScrollView>
      </EventContainer>
    );
  };
  
  export default EventScreen;
  const EventContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;