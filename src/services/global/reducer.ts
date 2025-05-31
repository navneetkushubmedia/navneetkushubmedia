// features/global/reducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
  loading: boolean;
  isSignedIn: boolean;
  userToken: string;
  userId: string;
  domainId: string;
  ipAddress: string;
  amount: number;
  userName: string;
  matchId: string;
  matchList: [];
  stackList: number[];
}

const initialState: GlobalState = {
  loading: false,
  isSignedIn: false,
  userToken: '',
  userId: '',
  domainId: '',
  ipAddress: '',
  amount: 0,
  userName: '',
  matchId: '9898001',
  matchList: [],
  stackList: [100, 500, 1000, 5000, 8000, 10000, 25000, 50000, 75000, 100000],
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setIsSignedIn: (state, action: PayloadAction<boolean>) => {
      state.isSignedIn = action.payload;
    },
    setUserToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setDomainId: (state, action: PayloadAction<string>) => {
      state.domainId = action.payload;
    },
    setIpAddress: (state, action: PayloadAction<string>) => {
      state.ipAddress = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setMatchId: (state, action: PayloadAction<string>) => {
      state.matchId = action.payload;
    },
    setMatchList: (state, action: PayloadAction<[]>) => {
      state.matchList = action.payload;
    },
    setStackList: (state, action: PayloadAction<number[]>) => {
      state.stackList = action.payload;
    },
  },
});

export const {
  setLoading,
  setIsSignedIn,
  setUserToken,
  setUserId,
  setDomainId,
  setIpAddress,
  setAmount,
  setUserName,
  setMatchId,
  setMatchList,
  setStackList,
} = slice.actions;
export default slice.reducer;
