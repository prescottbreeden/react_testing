import React from 'react';
import { mount } from 'enzyme';
import Comment from 'components/Comment';
import Root from 'Root';

describe('CommentBox Component', () => {
  let component: any;

  beforeEach(() => {
    const comment = "dingoes";

    component = mount(
      <Comment comment={comment} />
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('renders a Comment Component for each comment', () => {
    expect(component.find(Comment).length).toEqual(1);
  });

});
