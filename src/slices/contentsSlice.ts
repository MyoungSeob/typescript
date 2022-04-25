import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UpdateContents {
  id: number;
  contents: string | undefined;
}

const initialState = [
  {
    id: 0,
    contents: '기본 데이터',
  },
] as UpdateContents[];

export const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    update: (
      state: UpdateContents[],
      action: PayloadAction<UpdateContents>,
    ) => {
      return [...state, action.payload];
    },
  },
});

export default contentsSlice.reducer;
export const {update} = contentsSlice.actions;
