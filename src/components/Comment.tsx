import React from 'react';
import { CommentProps } from 'types/common.types';

const Comment: React.FC<CommentProps> = (props) => {
  const { key, comment } = props;
  const styles = {
    border: '1px solid blue',
    padding: '10px',
    margin: '5px',
  };
  return (
    <div key={key} style={styles}>
      {comment}
    </div>
  )
}

export default Comment;
