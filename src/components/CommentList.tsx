import React from 'react';
import { connect } from 'react-redux';
import { CommentListProps } from 'types/common.types';

const CommentList: React.FC<CommentListProps> = (props) => {
  const { comments } = props;
  const styles = {
    border: '1px solid blue',
    padding: '10px',
    margin: '5px',
  };
  return (
    <div>
      {comments.map((comment, idx) => (
        <ul key={idx}>
          <li key={idx} style={styles}>{comment}</li>
        </ul>
      ))
      }
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);

