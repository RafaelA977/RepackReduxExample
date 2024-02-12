import {RootState} from '../store.ts';

export const selectCounter = (state: RootState) => state.counter.value;
