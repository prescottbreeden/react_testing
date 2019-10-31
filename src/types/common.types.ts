export interface CommentListProps {
  comments: string[];
};

export interface CommentProps {
  key: number;
  comment: string;
}

export interface CommentBoxProps {
  saveComment: Function;
}

export interface CommentBoxState {
  comment: string;
}
