import { AnyAction } from 'redux';

const initialState: CounterState = {
  value: 0,
};

type CounterState = {
  value: number;
};

export default function counterReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
}
