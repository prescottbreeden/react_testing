export interface CommentListProps {
  comments: string[];
};

export interface CommentProps {
  comment: string;
}

export interface CommentBoxProps {
  saveComment: Function;
}

export interface CommentBoxState {
  comment: string;
}
