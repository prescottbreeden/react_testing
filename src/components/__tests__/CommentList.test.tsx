import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

describe('CommentBox Component', () => {
  let wrapper: any;

  beforeEach(() => {
    const initialState = {
      comments: ['Comment 1', 'Comment 2'],
    };

    wrapper = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders without crashing', () => {
    expect(wrapper.find('CommentList').length).toEqual(1);
  });

  it('renders a Comment Component for each comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('shows the text for each comment', () => {
    expect(wrapper.render().text()).toContain('Comment 1');
    expect(wrapper.render().text()).toContain('Comment 2');
  });

});
