import React from 'react';
import { CommentProps } from 'types/common.types';

const Comment: React.FC<CommentProps> = (props) => {
  const { comment } = props;
  const styles = {
    border: '1px solid blue',
    padding: '10px',
    margin: '5px',
  };
  return (
    <div style={styles}>
      {comment}
    </div>
  )
}

export default Comment;
