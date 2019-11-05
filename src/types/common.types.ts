export interface CommentListProps {
  comments: string[];
};

export interface CommentProps {
  comment: string;
}

export interface CommentBoxProps {
  saveComment: Function;
  fetchComments: Function;
}

export interface CommentBoxState {
  comment: string;
}

export interface CommentAPIObject {
  name: string;
  body: string;
}
