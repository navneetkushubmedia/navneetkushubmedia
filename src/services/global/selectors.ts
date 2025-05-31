import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectors = {
  loading: createSelector(
    (state: RootState) => state.global.loading,
    (state) => state,
  ),
  isSignedIn: createSelector(
    (state: RootState) => state.global.isSignedIn,
    (state) => state,
  ),
  userToken: createSelector(
    (state: RootState) => state.global.userToken,
    (state) => state,
  ),
  userId: createSelector(
    (state: RootState) => state.global.userId,
    (state) => state,
  ),
  domainId: createSelector(
    (state: RootState) => state.global.domainId,
    (state) => state,
  ),
  ipAddress: createSelector(
    (state: RootState) => state.global.ipAddress,
    (state) => state,
  ),
  amount: createSelector(
    (state: RootState) => state.global.amount,
    (state) => state,
  ),
  userName: createSelector(
    (state: RootState) => state.global.userName,
    (state) => state,
  ),
  matchId: createSelector(
    (state: RootState) => state.global.matchId,
    (state) => state,
  ),
  matchList: createSelector(
    (state: RootState) => state.global.matchList,
    (state) => state,
  ),
  stackList: createSelector(
    (state: RootState) => state.global.stackList,
    (state) => state,
  ),
};
