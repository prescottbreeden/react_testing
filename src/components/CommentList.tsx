import React from 'react';
import { connect } from 'react-redux';
import { CommentListProps } from 'types/common.types';

const CommentList: React.FC<CommentListProps> = (props) => {
  const { comments } = props;
  return (
    <div>
        <ul>
          {comments.map((comment) => { 
            console.log(comment);
            return <li key={comment} className={'comment'}>{comment}</li>
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ comments: state.comments });
export default connect(mapStateToProps)(CommentList);

