import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import {CommentAPIObject} from 'types/common.types';

export default (
  state: string[] = [],
  action: any
) => {
  switch (action.type) {

    case SAVE_COMMENT:
      const { comment } = action.payload;
      return [...state, comment];

    case FETCH_COMMENTS:
      const { data } = action.payload;
      const comments = data.map((comment: CommentAPIObject) => comment.body);
      return [...state, ...comments];

    default:
      return state;
  };
};
