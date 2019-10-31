import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { CommentBoxProps, CommentBoxState } from 'types/common.types';

const CommentBox: React.FC<CommentBoxProps> = (props) => {
  const { saveComment } = props;
  const [formState, setFormState] = useState<CommentBoxState>({ comment: '' });

  const onFormChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ comment: event.target.value })
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    saveComment(formState);
    setFormState({ comment: '' });
  };

  const textareaStyles = {
    width: '300px',
    height: '100px',
  }

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: 'steelblue',
    border: 'none',
    borderRadius: '2px',
    color: '#eee',
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea 
        value={formState.comment} 
        onChange={onFormChange}
        style={textareaStyles}
      />
      <div>
        <button style={buttonStyles}>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, actions)(CommentBox);
