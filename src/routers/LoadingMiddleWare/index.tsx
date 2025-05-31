import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  setIpAddress,
  setIsSignedIn,
} from '../../services/global/reducer';
import ImagePath from '../../constants/ImagePath';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Theme';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { globalSelectors } from '../../services/global';

interface NetInfoDetails {
  ipAddress?: string;
}

export const LoadingMiddleWare = () => {
  const isSignedIn = useAppSelector(globalSelectors.isSignedIn);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    console.log('isSignedIn', isSignedIn);
  }, [isSignedIn]);

  useEffect(() => {
    const getIPAddress = async () => {
      try {
        const netInfoState: NetInfoState = await NetInfo.fetch();
        const details = netInfoState.details as NetInfoDetails;
        const ip = details?.ipAddress;
        console.log('Ip Address 123', ip);
        if (ip) {
          dispatch(setIpAddress(ip));
        }
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    getIPAddress();

    const time = 2000;
    setTimeout(async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('token');
        console.log('isLoggedIn', isLoggedIn);
        if (isLoggedIn) {

          setTimeout(
            async () => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'App' }],
                }),
              );
            },
            time - Date.now() > 0 ? time - Date.now() : 0,
          );
        } else {
          console.log('Logout', time - Date.now() > 0 ? time - Date.now() : 0);
          dispatch(setIsSignedIn(false));
          setTimeout(
            async () => {
              console.log('Hitting');
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Auth' }],
                }),
              );
            },
            time - Date.now() > 0 ? time - Date.now() : 0,
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(
          async () => {
            setLoading(false);
          },
          time - Date.now() > 0 ? time - Date.now() : 0,
        );
      }
    }, 100);
  }, []);

  return loading ? (
    <Lottie
      source={ImagePath.loadingAnimation}
      autoPlay
      resizeMode="contain"
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
    />
  ) : null;
};
