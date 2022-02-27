import { AnyAction } from 'redux';

const initialState: UserState = {
  name: '',
};

type UserState = {
  name: string;
};

export default function counterReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}
