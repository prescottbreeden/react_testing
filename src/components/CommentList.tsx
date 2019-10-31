import React from 'react';
import Comment from 'components/Comment';
import { connect } from 'react-redux';
import { CommentListProps } from 'types/common.types';

const CommentList: React.FC<CommentListProps> = (props) => {
  const { comments } = props;
  return (
    <div>
      {comments.map((comment, idx) => <Comment key={idx} comment={comment} />)}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);

