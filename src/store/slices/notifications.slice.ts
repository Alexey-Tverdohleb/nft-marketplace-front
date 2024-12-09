import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import DUMMY_DATA from 'components/Button/dummyData';

interface InitialNotificationsState {
  notifications: {
    content: string
    time: string
    seen: boolean
    id: number
    event: {
      name: string
      icon: string
    }
    item: {
      name: string
      url: string
      width: number
      height: number
    }
  }[]
}

const initialState: InitialNotificationsState = {
  notifications: DUMMY_DATA,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setAllSeen: (state) => {
      state.notifications = state.notifications
        .map((item) => ({ ...item, seen: false }));
    },
    markNotificationSeen: (state, action: PayloadAction<number>) => {
      state.notifications = state.notifications
        .map((item) => (item.id === action.payload ? ({ ...item, seen: false }) : item));
    },
  },
});

export const { setAllSeen, markNotificationSeen } = notificationsSlice.actions;

export default notificationsSlice.reducer;
