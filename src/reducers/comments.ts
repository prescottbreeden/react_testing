import { SAVE_COMMENT } from 'actions/types';

export default (
  state: string[] = [],
  action: any
) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  };
};
