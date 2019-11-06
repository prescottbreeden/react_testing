import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { CommentBoxProps, CommentBoxState } from 'types/common.types';

const CommentBox: React.FC<CommentBoxProps> = (props) => {
  const { saveComment, fetchComments } = props;
  const [formState, setFormState] = useState<CommentBoxState>({ comment: '' });

  const onFormChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ comment: event.target.value })
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    saveComment(formState);
    setFormState({ comment: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea 
        value={formState.comment} 
        onChange={onFormChange}
        className='textarea'
      />
      <div>
        <button className={'button'} >Submit Comment</button>
      </div>
      <div>
        <button 
          className='button fetch-comments'
          type="button"
          onClick={() => fetchComments()}
        >
          Grab all Comments
        </button>
      </div>
    </form>
  );
};

export default connect(null, actions)(CommentBox);
