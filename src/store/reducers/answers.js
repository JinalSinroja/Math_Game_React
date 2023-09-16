import { createSlice } from '@reduxjs/toolkit';
import { questions } from '../../utils/constants';

const answersSlice = createSlice({
  name: 'answers',
  initialState: { answers: questions },
  reducers: {
    setAsnwer: (state, action) => {
      console.log('🚀 ~ file: answers.js:13 ~ action.payload:', action.payload);

      let index = state.answers.findIndex((el) => el.id == action.payload.id);
      let updatedAnswers = [...state.answers];
      if (index > -1) {
        updatedAnswers[index] = action.payload;
      }
      return {
        ...state,
        answers: updatedAnswers,
      };
    },
  },
});

export const { setAsnwer } = answersSlice.actions;
export default answersSlice.reducer;
